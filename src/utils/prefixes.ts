/**
 * Helper managing the prefix.json file
 * 
 * Imports standard prefixes.
 * Converts prefixes into SPARQL header
 * 
 */
import prefixes from '../PREFIXES.json'

type PrefixObject = { [prefix: string]: string }

/**
 * Prefixes are required to execute direct queries
 * Generate an object of { prefix: IRI } pairs for use in SPARQL
 * 
 * @param prefixJSON : the JSON representing namespace - URI value pairs.
 * @param basePrefix (string): the prefix for the @vocab entry
 */
const sparqlPrefixes = (prefixJSON:PrefixObject = prefixes, basePrefix: string = '') =>
  Object.keys(prefixJSON)
    .map((k, i) => `PREFIX ${k == '@vocab' ? basePrefix : k}: <${Object.values(prefixes)[i]}>`)
    .join(' \n') + '';

/**
 * Prefixes are required to be added in the RDF writing context
 * Generate an object of { prefix: IRI } pairs for use in RDF write operations, or contexts
 * 
 * @param prefixJSON : the JSON representing namespace - URI value pairs.
 * @param basePrefix (string): the prefix for the @vocab entry
 */
const rdfPrefixes = (prefixJSON:PrefixObject = prefixes, basePrefix: string = '') =>
    Object.keys(prefixJSON)
      .map((k, i) => `@prefix ${k == '@vocab' ? basePrefix : k}: <${Object.values(prefixes)[i]}> .`)
      .join(' \n') + '';

export default {
    sparqlPrefixes,
    rdfPrefixes
}