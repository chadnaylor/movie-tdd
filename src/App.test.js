import React from "react";
import { shallow } from "enzyme";
import App from "./App";
beforeAll(() => {
  global.fetch = jest.fn(); // mocking `fetch()` API
  window.fetch = jest.fn()
});
test("App loads list of movies from server", () => {
  let wrapper = shallow(<App />, { disableLifecycleMethods: true });

  const spyDidMount = jest.spyOn(App.prototype, "componentDidMount");

  fetch.mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve([
          {
            movieId: 1,
            title: "A movie!",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"
          },
        ]);
      },
    });
  });
  const didMount = wrapper.instance().componentDidMount()
  expect(spyDidMount).toHaveBeenCalled();
  didMount.then(() => {
    wrapper.update()
    expect(wrapper.state().movies.length).toEqual(1)
    spyDidMount.mockRestore();
    fetch.mockClear();
    done();
  })


});
