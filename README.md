# xml2jsonld

[![Build Status](https://github.com/certiman/xml2jsonld/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/certiman/xml2jsonld//actions/workflows/ci.yml?query=branch%3Amain)
[![Release Status](https://github.com/certiman/xml2jsonld/actions/workflows/publish.yml/badge.svg)](https://github.com/certiman/xml2jsonld//actions/workflows/publish.yml)
[![NPM Version](https://badgen.net/npm/v/@certiman/xml2jsonld)](https://npmjs.org/package/@certiman/xml2jsonld)
[![NPM Install Size](https://badgen.net/packagephobia/install/@certiman/xml2jsonld)](https://packagephobia.com/result?p=@certiman%2Fxml2jsonld)
[![NPM Downloads](https://badgen.net/npm/dm/@certiman/xml2jsonld)](https://npmcharts.com/compare/@certiman/xml2jsonld?minimal=true)

> [!WARNING]
> This library is under full development, based on migration of a private codebase at the Agency. At the moment, it can not be installed, nor used.

Allows for complex XML files (or sets of such files) to be converted into JSON-LD, while allowing each string to be post-processed as Literal or NamedNode. In most cases, many strings present in the XML, need a URI-conversion, even based on other strings in the same XML file (or even in another KG). The codebase provides for `post-processors`, which launch queries in search for these `?s`-nodes.

## Technologies used

The following linked data technologies are used:

- JS xml dom parser, allowing to extract data from the xml source files into json, by using an extended JSON-LD context object, containing all the XPaths to the strings.
- typescript functions based parsers, which convert the extracted strings into Literals or NamedNodes.
- ldflex, allowing to manipulate the RDF as { js objects }
- (integrated within the above) comunica, to enable writing the RDF results in a KG, defined per Class.

## Capabilities

The conversion of XML into JSON is a solved problem, but the library provides some extraction routines nevertheless.

### XML

1. Extract XML data as strings, using xpaths defined per path.
2. Apply a post-processor on each string, converting it into a Literal or NamedNode.

## Writing

3. Write the resulting JSONLD to a destination, per extracted class.
