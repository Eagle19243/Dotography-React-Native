import * as utils from '../data'

const entities = {
  gender: {
    12: {
      id: 12,
      value: 'Male',
    },
    13: {
      id: 13,
      value: 'Female',
    }
  },
  spouse_type: {
    1: {
      name: '1'
    },
    2: {
      name: '2'
    }
  }
}

const mockData = {
  id: 1234,
  firstname: 'first1',
  lastname: 'last1',
  gender: 12,
  test: {
    spouse: [
      { id: 1, spouse_type: [1, 2], gender: 12 }
    ]
  }
}


describe('Utilities map data method', () => {
  it('should return false when data is "false"', () => {
    const result = utils.entitiesReduceData(false, entities)
    expect(result).toEqual(false)
  })

  it('should map normalized data to object', () => {
    const expectedData = {
      id: 1234,
      firstname: 'first1',
      lastname: 'last1',
      gender: {
        id: 12,
        value: 'Male',
      },
      test: {
        spouse: [
          {
            id: 1,
            spouse_type: [{
              name: '1'
            }, {
              name: '2'
            }],
            gender: {
              id: 12,
              value: 'Male',
            }
          }
        ]
      }
    }
    const result = utils.entitiesReduceData(mockData, entities)
    expect(result).toEqual(expectedData)
  })
})
