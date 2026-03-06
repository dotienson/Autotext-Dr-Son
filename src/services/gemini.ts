import { GoogleGenAI } from "@google/genai";

export async function translateToNHSStyle(text: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
You are a medical translator. Translate the following medical advice from Vietnamese to English.
The translation should follow the style of the UK National Health Service (NHS):
- Clear, simple, and easy to understand for patients.
- Empathetic and professional tone.
- Use bullet points where appropriate.
- Avoid overly complex medical jargon where simple terms exist.

CRITICAL INSTRUCTIONS:
- DO NOT include any conversational filler like "Here is the translation...".
- DO NOT use markdown formatting symbols like ---, ###, or **. Return plain text only.
- ONLY return the translated text.

Here is the text to translate:
${text}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response.text || "Translation failed.";
}
