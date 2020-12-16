const GetMatchVariation = (variations: any, options: any) => {
  /* search for variation */
  let list = Array.isArray(variations) ? variations : Object.values(variations)
  options.map(dAttr => {
    list = list.filter((v) => {
      return v.variation_attributes.reduce((acc, vAttr) => {
        if (acc) return acc;
        if (dAttr.taxonomy_slug === vAttr.taxonomy_slug && dAttr.term_slug === vAttr.term_slug) acc = true;
        return acc
      }, false)
    })
  })
  return list[0];
}

export default GetMatchVariation;