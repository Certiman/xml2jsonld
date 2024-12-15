# xml2jsonld

[![Build Status](https://github.com/certiman/xml2jsonld/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/certiman/xml2jsonld//actions/workflows/ci.yml?query=branch%3Amain)
[![Release Status](https://github.com/certiman/xml2jsonld/actions/workflows/publish.yml/badge.svg)](https://github.com/certiman/xml2jsonld//actions/workflows/publish.yml)
[![NPM Version](https://badgen.net/npm/v/@certiman/xml2jsonld)](https://npmjs.org/package/@certiman/xml2jsonld)
[![NPM Install Size](https://badgen.net/packagephobia/install/@certiman/xml2jsonld)](https://packagephobia.com/result?p=@certiman%2Fxml2jsonld)
[![NPM Downloads](https://badgen.net/npm/dm/@certiman/xml2jsonld)](https://npmcharts.com/compare/@certiman/xml2jsonld?minimal=true)

Allows for complex XML files (or sets of such files) to be converted into JSON-LD, while allowing each Literal or NamedNode to be post-processed.

## Technologies used

The following linked data technologies are used:

- ldflex/ldkit, allowing to manipulate the extracted RDF as { js objects }
- (integrated within the above) comunica, to enable writing the RDF results.
- xml dom parser, allowing to extract data from the xml source files.

## Capabilities

### XML

1. Extract XML data as strings, using xpaths defined per path.
2. Apply a post-processor on each string, converting it into a Literal or NamedNode.

## Writing

3. Write the resulting JSONLD to a destination, per extracted class.