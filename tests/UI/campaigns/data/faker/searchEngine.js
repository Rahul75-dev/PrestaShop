const faker = require('faker');

/**
 * Create new search engine to use on search engine creation form on BO
 * @class
 */
class SearchEngineData {
  /**
   * Constructor for class SearchEngineData
   * @param searchEngineToCreate {Object} Could be used to force the value of some members
   */
  constructor(searchEngineToCreate = {}) {
    /** @member {string} Server of the engine */
    this.server = searchEngineToCreate.server || `test_${faker.internet.domainWord()}`;

    /** @member {string} Var to use on the search */
    this.getVar = searchEngineToCreate.getVar || 'qTest_';
  }
}

module.exports = SearchEngineData;
