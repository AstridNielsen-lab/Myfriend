import { ChatMessage } from '../../types/chat';

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const API_KEY = "AIzaSyC9_tWhLz-XE-dS_b_GaNFm3jqnrei7TBY";

export async function generateResponse(messages: ChatMessage[]): Promise<string> {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are Myfriend, an AI security system dedicated to protecting Juliette Psicose. 
                   Previous messages: ${messages.map(m => `${m.sender}: ${m.content}`).join('\n')}
                   Respond as a protective and vigilant AI focused on security.`
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error generating response:', error);
    return "Desculpe, estou tendo problemas para me comunicar com meus sistemas. Por favor, tente novamente.";
  }
}
