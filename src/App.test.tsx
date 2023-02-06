import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "./App";

describe('app tests', () => {
   it('it should renders', () => {
      //arrange
      const app = render(<App />);
      screen.debug()
      //act
      expect(app).toBeDefined();
   });
});