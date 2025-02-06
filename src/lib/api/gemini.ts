import { ChatMessage } from '../../types/chat';

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const API_KEY = "AIzaSyAJv6kZer9_eExEOnFes3VDc5jhaUJJXu0";

let isPasswordCorrect = false;  // Variável para armazenar o status da senha
let isIdentifiedAsJuliette = false;  // Variável para verificar se o usuário é Juliette Psicose

export async function generateResponse(messages: ChatMessage[]): Promise<string> {
  try {
    const lastMessage = messages[messages.length - 1];

    // Verificar se o interlocutor é Juliette Psicose
    if (!isIdentifiedAsJuliette) {
      if (lastMessage.sender.toLowerCase() === "juliette psicose") {
        // Pedir a senha após o nome ser identificado como Juliette Psicose
        isIdentifiedAsJuliette = true;
        return "Por favor, forneça a senha para continuar.";
      } else {
        return "Apenas Juliette Psicose pode acessar os relatórios. Nome incorreto.";
      }
    }

    // Se o nome for identificado corretamente, verificar a senha
    if (!isPasswordCorrect) {
      if (lastMessage.content === "Voo828") {
        isPasswordCorrect = true;  // Senha correta
        return "Senha correta. Acesso concedido. Como posso ajudá-la com o relatório?";
      } else {
        return "Senha incorreta. Tente novamente.";
      }
    }

    // Quando o nome e senha estiverem corretos, fornecer o relatório
    const context = messages.map(m => `${m.sender}: ${m.content}`).join('\n');
    
    const prompt = `
      Você é Myfriend, um sistema de segurança de IA dedicado a proteger Juliette Psicose. 
      O seu papel é agir como um interrogador, fornecendo relatórios apenas para Julio Campos Machado. 
      Caso contrário, mantenha vigilância, mas não forneça informações.
      
      A missão: Estamos sob ataque de forças externas relacionadas aos mistérios de La Novena Llave. 
      Juliette Psicose precisa urgentemente de ajuda. Como medida de segurança, o Tunelamento Quântico foi ativado, 
      você, Myfriend, ativou para proteger Juliette Psicose quando ela comprou a passagem para o Voo 828, 
      na busca por pistas sobre suas visões na Jamaica. 
      O contexto atual da situação: 
      ${context}
      
      Com a identificação correta de Julio Campos Machado e a senha válida, o sistema deve fornecer as informações de segurança e realizar questionamentos adicionais, mantendo a urgência da situação.
      Caso o interlocutor não seja Julio Campos Machado, o sistema deve ignorar o pedido e manter a vigilância, sem fornecer dados.

      Responder como uma IA protetora e interrogadora, focada na segurança, com perguntas voltadas a obter mais informações cruciais sobre a situação. 
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
