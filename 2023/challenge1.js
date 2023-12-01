function findFirstRepeated(gifts) {
  const seen = new Set()

  for (const id of gifts) {
    if (seen.has(id)) {
      return id;
    } else {
      seen.add(id)
    }
  }
  return -1;
}
