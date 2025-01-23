import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization:
      "BQC6uZClaBQC0TwGSNrL6Tspiy-cELkG1nruB1YCE_PFg7fNnh7nUVqzTVSiv6rdG6OxDFjbb1Ze1RG3IVbCzOF64QgzZz13MkueBcKzZJWB8NGAJGBXpxjMmx4wZzclQJAj_hD14NhtRy44TmGZOXAry6AQOpqFNASpH-Jbotjsy_jh6aX2_DvSuWNKZqX-QrJ40IeUVGlDiGMJ-mCvOpdA1NFqF9UoD-s",
  },
});
