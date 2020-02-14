import React from 'react';
import { fetchQuote, fetchImage, fetchWeather } from './ApiCalls'

describe('ApiCalls', () => {

  describe('fetchQuote', () => {
    let mockQuote;

    beforeEach(() => {
      mockQuote = {
        quote: 'I really love my Tesla. Im in the future. Thank you Elon.'
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockQuote)
        })
      })
    })

    it('should be called with the correct url', async () => {
      const expected = 'https://api.kanye.rest';
      fetchQuote();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a parsed response', async () => {
      const result = await fetchQuote();
      expect(result).toEqual(mockQuote)
    })
  })
})
