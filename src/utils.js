import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

export const validDay = (date, start, end) => {
  if (start >= date) {
    return false;
  }

  if (end < date) {
    return false;
  }

  return true;
};

export const getBaudauerProZeitGraph = (baudauerProZeitGraph) => {
  if (baudauerProZeitGraph?.length === 0) {
    return null;
  }
  let sorted = baudauerProZeitGraph.sort((a, b) =>
    a.genehmigt < b.genehmigt ? -1 : 1
  );
  let result = [];
  result.push({
    genehmigt: sorted[0].genehmigt,
    sum: sorted[0].tage,
    count: 1,
    avg: sorted[0].tage,
  });

  for (let i = 1; i < baudauerProZeitGraph.length; ++i) {
    if (sorted[i].genehmigt === sorted[i - 1].genehmigt) {
      result[result.length - 1].count += 1;
      result[result.length - 1].sum += sorted[i].tage;
      result[result.length - 1].avg =
        result[result.length - 1].sum / result[result.length - 1].count;
    } else {
      result.push({
        genehmigt: sorted[i].genehmigt,
        sum: sorted[i].tage,
        count: 1,
        avg: sorted[i].tage,
      });
    }
  }
  return result;
};

export const getWkas = (wkas, filters) => {
  let result = wkas;
  if (filters.ort !== "") {
    result = result.filter((e) => e.ort === filters.ort);
  }
  if (filters.status === "InBetrieb") {
    result = result.filter(
      (e) =>
        e.status === filters.status &&
        e.inbetriebname_datum &&
        validDay(e.inbetriebname_datum, filters.start, filters.end)
    );
  } else if (filters.status === "Genehmigt") {
    result = result.filter(
      (e) =>
        e.status !== "im Gen.Verf." &&
        e.genehmigt_datum &&
        validDay(e.genehmigt_datum, filters.start, filters.end)
    );
  } else if (filters.status === "Genehmigt und InBetrieb") {
    result = result.filter(
      (e) =>
        e.genehmigt_datum &&
        e.inbetriebname_datum &&
        validDay(e.inbetriebname_datum, filters.start, filters.end) &&
        validDay(e.genehmigt_datum, filters.start, filters.end)
    );
  } else {
    result = [];
  }
  return result;
};

export const getValueScale = (data) => {
  if (!(data && data.length)) {
    return null;
  }
  let nums = [...data];
  nums.sort((a, b) => (a < b ? -1 : 1));
  let tmp = [];
  tmp.push({ num: nums[0], count: 1 });
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) {
      tmp[tmp.length - 1].count += 1;
    } else {
      tmp.push({ num: nums[i], count: 1 });
    }
  }
  let i = 0,
    length = 9,
    max = tmp.length > 1 ? tmp[tmp.length - 1].count : 0,
    total = nums.length - max,
    counter = 0,
    add = false,
    result = [];

  if (tmp.length <= 10) {
    tmp.map((e) => result.push(e.num));
    result.length > 1 && result.push("alle");
    return result;
  }

  while (i < tmp.length - 1 && length > 0) {
    if (tmp.length - i - 1 <= length) {
      for (let j = i; j < tmp.length - 1; ++j) {
        result.push(tmp[j].num);
      }
      break;
    }
    if (tmp[i].count + counter > (1.6 / length) * total) {
      if (!add && counter > (0.8 / length) * total) {
        result.push(tmp[i - 1].num);
        length -= 1;
      }
      add = true;
    } else if (tmp[i].count + counter >= (1 / length) * total) {
      add = true;
    } else {
      add = false;
      counter += tmp[i].count;
    }
    if (add) {
      total -= tmp[i].count + counter;
      counter = 0;
      length -= 1;
      result.push(tmp[i].num);
    }
    i += 1;
  }
  if (i > 0) {
    result.push(tmp[tmp.length - 1].num);
  }
  result.push("alle");
  return result;
};

export const colors = scaleOrdinal(schemeCategory10).range();

export const getColor = (anzahl, scale, colors) => {
  let value = scale;
  for (let i = 0; i < value.length; ++i) {
    if (anzahl <= value[i]) {
      return colors[i];
    }
  }
};

export const sum = (arr) => arr.reduce((a, b) => a + b, 0);

export const mean = (arr) => sum(arr) / arr.length;

export const quantile = (arr, q) => {
  const pos = (arr.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (arr[base + 1] !== undefined) {
    return arr[base] + rest * (arr[base + 1] - arr[base]);
  } else {
    return arr[base];
  }
};

export const q25 = (arr) => quantile(arr, 0.25);

export const q50 = (arr) => quantile(arr, 0.5);

export const q75 = (arr) => quantile(arr, 0.75);
