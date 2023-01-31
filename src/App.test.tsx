import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "./App";

describe('app tests', () => {
   it('it should renders', () => {
      //arrange
      const app = render(<App />);
      //act
      const text = screen.getByText('Vite + React');
      //assert
      expect(text).toBeDefined();
      expect(app).toBeDefined();
   });
});