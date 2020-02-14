import React from 'react';
import { fetchQuote, fetchImage, fetchWeather } from './ApiCalls'

const apiKey = process.env.REACT_APP_WEATHER_API_KEY


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

  describe('fetchWeather', () => {
    let mockWeather;

    beforeEach(() => {
      mockWeather = { 
        time: 1581694253,
        summary: "Clear",
        icon: "clear-day",
        nearestStormDistance: 210,
        nearestStormBearing: 326,
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 23.95,
        apparentTemperature: 24.19,
        dewPoint: 17.33,
        humidity: 0.75,
        pressure: 1015.2,
        windSpeed: 1.98,
        windGust: 4.35,
        windBearing: 318,
        cloudCover: 0.04,
        uvIndex: 1,
        visibility: 10,
        ozone: 340.2
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockWeather)
        })
      })
    })

    it('should be called with the correct url', async () => {
      const expected = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/39.7392, -104.9903`
      fetchWeather();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a parsed response', async () => {
      const result = await fetchWeather()
      expect(result).toEqual(mockWeather)
    })

  })
})
