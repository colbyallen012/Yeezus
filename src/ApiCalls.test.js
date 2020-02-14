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

    it('should return an error message if promise is rejected', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching quote')
      });
      await expect(window.fetch()).rejects.toEqual('Error fetching quote')
    })
  })

  describe('fetchImage', () => {
    let mockImage;

    beforeEach(() => {
      mockImage = { 
        image: 'https://images.unsplash.com/photo-1499452565718-6a1fcb7d2001?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMTE5Mn0'
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockImage)
        })
      })
    })

    it('should be called with the correct URL', async () => {
      const expected = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY}&collections=573009&orientation=landscape`
      fetchImage();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a parsed response', async () => {
      const result = await fetchImage()
      expect(result).toEqual(mockImage)
    })

    it('should return an error message if promise is rejected', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching image')
      });
      await expect(window.fetch()).rejects.toEqual('Error fetching image')
    })
  })
})
