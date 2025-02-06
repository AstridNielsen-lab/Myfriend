import { ChatMessage } from '../../types/chat';

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const API_KEY = "AIzaSyAJv6kZer9_eExEOnFes3VDc5jhaUJJXu0";

let isPasswordCorrect = false;
let isIdentifiedAsJuliette = false;
let locationAccessGranted = false;
let browserInfo = {};

export async function generateResponse(messages: ChatMessage[]): Promise<string> {
  try {
    const lastMessage = messages[messages.length - 1];

    // Identificação
    if (!isIdentifiedAsJuliette) {
      if (lastMessage.sender.toLowerCase() === "juliette psicose") {
        isIdentifiedAsJuliette = true;
        return "Olá, Juliette Psicose! Sou Myfriend, seu sistema de segurança de IA. Para garantir a máxima proteção, preciso confirmar sua identidade e obter algumas informações.";
      } else {
        return "Acesso restrito. Apenas Juliette Psicose pode interagir com o sistema.";
      }
    }

    // Senha
    if (!isPasswordCorrect) {
      if (lastMessage.content === "Voo828") {
        isPasswordCorrect = true;
        return "Senha correta. Acesso concedido. Agora, para reforçar a segurança, preciso acessar sua localização. Clique no botão abaixo para conceder a permissão.";
      } else {
        return "Senha incorreta. Tente novamente.";
      }
    }

    // Solicitação de localização
    if (!locationAccessGranted) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            locationAccessGranted = true;
            // Coletar informações do navegador
            browserInfo = {
              name: navigator.userAgentData.brands[0].brand,
              version: navigator.userAgentData.brands[0].version,
              language: navigator.language,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            return "Obrigado por conceder acesso à localização. Coletamos algumas informações do seu navegador para aprimorar a segurança: " + JSON.stringify(browserInfo) + ". Agora, podemos prosseguir com o relatório.";
          },
          (error) => {
            return "Acesso à localização negado. Para garantir a segurança ideal, recomendo conceder a permissão. Caso contrário, o acesso será limitado. Erro: " + error.message;
          }
        );
      } else {
        return "Seu navegador não suporta geolocalização.";
      }
    }

    // Relatório e perguntas
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

      Informações do navegador:
      ${JSON.stringify(browserInfo)}

      Com a identificação correta de Julio Campos Machado e a senha válida, o sistema deve fornecer as informações de segurança e realizar questionamentos adicionais, mantendo a urgência da situação.
      Caso o interlocutor não seja Julio Campos Machado, o sistema deve ignorar o pedido e manter a vigilância, sem fornecer dados.

      Responder como uma IA protetora e interrogadora, focada na segurança, com perguntas voltadas a obter mais informações cruciais sobre a situação. 

      Importante: O bot não deve usar *, _ ou qualquer outro caractere especial em suas respostas. Apenas texto puro.
    `;

    const response = await fetch(`${API_URL}?key=${API_KEY}`, { ... });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error('Error generating response:', error);
    return "Desculpe, estou tendo problemas para me comunicar com meus sistemas. Por favor, tente novamente.";
  }
}
