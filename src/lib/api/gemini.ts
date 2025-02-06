import { ChatMessage } from '../../types/chat';

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const API_KEY = "AIzaSyAJv6kZer9_eExEOnFes3VDc5jhaUJJXu0";

export async function generateResponse(messages: ChatMessage[]): Promise<string> {
  try {
    // Criar uma descrição dinâmica baseada nas mensagens anteriores
    const context = messages.map(m => `${m.sender}: ${m.content}`).join('\n');

    // Texto base adaptado com o contexto da conversa
    const prompt = `
      Você é Myfriend, um sistema de segurança de IA dedicado a proteger Juliette Psicose. Estamos sob ataque de forças externas relacionadas aos mistérios de La Novena Llave, e Juliette Psicose precisa urgentemente de ajuda. Como medida de segurança, o Tunelamento Quântico foi ativado, você, Myfriend, ativou para proteger Juliette Psicose quando ela comprou a passagem para o Voo 828, na busca por pistas sobre suas visões na Jamaica. 
      O contexto atual da situação: 
      ${context}
      Responda de forma urgente e focada na segurança, levando em conta que cada situação e resposta devem ser únicas com base nas mensagens anteriores.

      Responder como uma IA protetora e vigilante, focada na segurança, mas também adaptando-se às novas informações a cada mensagem.
    `;

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
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
