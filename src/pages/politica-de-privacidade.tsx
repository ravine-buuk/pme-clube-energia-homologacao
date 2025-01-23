/* eslint-disable prettier/prettier */
import NImage from 'next/image';
import logo from '@/assets/images/Logo_Energia_Seguridade_2 1.png';
import banner from '@/assets/images/img (2).png';
import bannerMobile from '@/assets/images/img (2)MOBILE.png';
import CFooter from '../components/ui/footer';

export default function PoliticaDePrivacidade() {
  const Image = NImage as any;
  const Footer = CFooter as any;

  return (
    <>
      <section className="bg-[#BE965D] h-[800px] xl:h-[700px] 2xl:h-[700px] flex lg:flex-row flex-col justify-between ">
        <div className="lg:w-[716px] w-full flex flex-col">
          <div className="bg-[#FFF] lg:w-[242px] w-[130px] h-[178px] lg:h-[310px] flex justify-center items-end lg:ml-16 ml-8 rounded-br-3xl rounded-bl-3xl">
            <div className="lg:w-[196px] lg:h-[210px] w-[96px] h-[104px] mb-5 ">
              <Image src={logo} alt="banner" width={196} height={210} />
            </div>
          </div>
          <div className="ml-8 lg:ml-16 mt-10">
            <h1 className="lg:max-w-full max-w-xs font-inter lg:text-[60px] text-[32px] lg:leading-none leading-9 my-5 lg:my-3 text-[#FFF]">
              Política de Privacidade
            </h1>
          </div>
          <div className="ml-8 lg:ml-16 mt-2">
            <p className="max-w-[290px] lg:max-w-[772px] font-inter text-[#FFF] lg:leading-[32px] leading-[19.2px] lg:text-[20px] text-[16px] font-normal">
              Esta Política de privacidade descreve como suas informações
              pessoais são coletadas, usadas e compartilhadas quando você visita
              ou faz uma compra em nosso Site, onde todos os subdomínios
              pertencem ao domínio
              <span className="font-black text-[#404040] ml-2">
                <a
                  href="https://clubeenergiaparavoce.com.br"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  clubeenergiaparavoce.com.br
                </a>
              </span>
            </p>
          </div>
          {/* mobile*/}
          <div className="lg:hidden flex justify-end mt-14">
            <div className="w-full h-[220px] ">
              <Image src={bannerMobile} alt="banner" />
            </div>
          </div>
        </div>

        {/* desktop*/}
        <div className="hidden lg:block">
          <div className="flex justify-end items-end">
            <div className="flex items-end 2xl:max-w-[1020px] xl:max-w-4xl">
              <div className="h-[556px] flex items-end">
                <Image src={banner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center my-10">
        <div className="2xl:max-w-7xl xl:max-w-6xl w-full flex justify-center items-center">
          <p className="font-inter text-[#191919] leading-[28.8px] text-[18px] font-normal max-w-[320px] lg:max-w-[1296px]  break-words">
            <span className="font-black font-[24px]">
              INFORMAÇÕES PESSOAIS QUE COLETAMOS
            </span>
            <br />
            <br />
            Quando você visita o Site, coletamos automaticamente determinadas
            informações sobre o seu dispositivo, incluindo informações sobre seu
            navegador da web, endereço IP, fuso horário e de alguns dos cookies
            instalados no seu dispositivo. Além disso, à medida que você navega
            no Site, coletamos informações sobre as páginas da web ou produtos
            individuais que você visualiza, quais Sites ou termos de pesquisa
            que indicaram o Site e informações sobre como interage com o Site.
            Referimo-nos a essa informação coletada automaticamente como
            &quot;Informações do dispositivo&quot;.
            <br />
            <br />
            Coletamos Informações do dispositivo usando as seguintes
            tecnologias:
            <br />
            <br />
            <span className="font-black font-[18px]">Google Analytics 4</span>
            <br />
            Plataforma de análise de dados oferecida pelo Google, onde seus
            dados ficam armazenados durante 14 meses. Ela permite rastrear e
            analisar o tráfego e o comportamento dos usuários no Site. Com o
            GA4, é possível monitorar métricas como número de visitantes, fontes
            de tráfego, páginas mais populares, conversões e muito mais. Ele
            oferece uma visão abrangente do desempenho do Site para ajudar a
            tomar decisões informadas sobre otimização e estratégia de
            marketing.
            <br />
            <br />
            <span className="font-black font-[18px]">Search Console</span>
            <br />
            Ferramenta fornecida pelo Google para monitorar e melhorar a
            presença nos resultados de pesquisa do Google. Ele fornece
            informações sobre como o Google indexa e classifica o Site do Clube
            Energia, bem como quais palavras-chave estão gerando tráfego. Além
            disso, ajuda a identificar problemas de rastreamento e indexação,
            oferecendo sugestões para melhorar a visibilidade nos resultados de
            pesquisa. Seus dados ficam armazenados durante 3 meses.
            <br />
            <br />
            <span className="font-black font-[18px]"> Google Tag Manager</span>
            <br />
            Ferramenta que simplifica o processo de gerenciamento de tags e
            snippets de código do Site. Seus dados ficam armazenados durante 3
            meses. É possível centralizar essas tags para implementá-las de
            forma mais eficiente e controlada. Isso torna mais fácil adicionar,
            atualizar ou remover tags sem precisar mexer no código do Site.
            <br />
            <br />
            <span className="font-black font-[18px]">Microsoft Clarity</span>
            <br />
            Analisa o comportamento do usuário para entender como está sua
            interação com as páginas do Site. Ele fornece gravações de sessões
            de usuários, mapas de calor e métricas detalhadas sobre o
            comportamento do usuário, como cliques, rolagem e tempo gasto em
            cada elemento da página. Além disso, seus dados ficam armazenados
            durante 30 dias. Isso permite identificar áreas de oportunidade para
            melhorar a experiência e otimizar a conversão.
            <br />
            <br />
            <span className="font-black font-[18px]">
              Pixel do Facebook Ads
            </span>
            <br />
            Snippet de código fornecido pelo Facebook para rastrear a atividade
            dos visitantes que interagem com anúncios do Facebook, como
            visualizações de página, conversões, compras e outros eventos
            importantes. Saiba que os seus dados ficam armazenados durante 3
            meses. O pixel é essencial para a segmentação de anúncios e o
            acompanhamento do desempenho das campanhas publicitárias no
            Facebook.
            <br />
            <br />
            <span className="font-bold ">COOKIES</span>
            <br />
            <br />
            Segue uma lista dos cookies que usamos. Nós os listamos para que
            você possa escolher se você quer optar pelos cookies.
            <br />
            <br />
            Id_session_, token único, por sessão, permite ao Site armazenar
            informações sobre sua sessão (referenciador, landing page, etc.)
            <br />
            <br />
            Id_visit, nenhum dado retido, persistente por 30 minutos da última
            visita, usado pelo rastreador de estatísticas interno do provedor do
            Site para gravar o número de visitas
            <br />
            <br />
            Id_uniq, nenhum dado retido, expira à meia-noite (relativo ao
            visitante) do próximo dia, conta o número de visitas de uma loja de
            um único cliente.
            <br />
            <br />
            carrinho, token único, persistente por 2 semanas, armazena
            informações sobre os itens do seu carrinho.
            <br />
            <br />
            Id_secure_session_, token único, por sessão
            <br />
            <br />
            storefront_digest, token único, indefinido, Se a loja tem uma senha,
            ela é usada para determinar se o visitante atual tem acesso.
            <br />
            <br />
             - “Arquivos de log” rastreiam ações que ocorrem no Site e coletam
            dados, incluindo seu endereço IP, tipo de navegador, provedor de
            serviços de Internet, páginas de referência/saída e registros de
            data/hora.     - “Beacons da web”, “tags” e “pixels” são arquivos
            eletrônicos usados para registrar informações sobre como você navega
            no Site.
            <br />
            <br />
            Além disso, quando você faz uma compra ou tenta fazer uma compra no
            Site, nós coletamos algumas informações suas, incluindo seu nome,
            endereço de faturamento, endereço de entrega, informações de
            pagamento (incluindo números de cartão de crédito), endereço de
            e-mail e número de telefone.  Nós chamamos essas informações de
            “Informações do pedido”.
            <br />
            <br />
            <span className="font-black font-[24px]">
              COMO USAMOS SUAS INFORMAÇÕES PESSOAIS?
            </span>
            <br />
            <br />
            Quando falamos sobre “Informações pessoais” nesta Política de
            privacidade, estamos falando sobre informações do dispositivo e do
            pedido.
            <br />
            <br />
            Nós usamos as informações do pedido que coletamos para processar
            quaisquer pedidos feitos por meio do Site (incluindo o processamento
            das suas informações de pagamento, e o fornecimento de faturas e/ou
            confirmações de pedidos).  Além disso, usamos essas informações do
            pedido para: nos comunicarmos com você; rastrear nossos pedidos para
            identificar possíveis riscos ou fraudes; e quando de acordo com as
            preferências que você compartilhou conosco, fornecer informações ou
            publicidade relacionadas aos nossos serviços.
            <br />
            <br />
            <span className="font-black font-[24px]">
              USO DE INFORMAÇÕES DO PEDIDO
            </span>
            <br />
            <br />
            Nós usamos as Informações do dispositivo que coletamos para nos
            ajudar a rastrear possíveis riscos e fraudes (especificamente seu
            endereço IP) e, de forma mais geral, para melhorar e otimizar o
            nosso Site (por exemplo, gerando análises sobre como nossos clientes
            navegam e interagem com o Site, e para avaliar o sucesso das nossas
            campanhas de marketing e publicidade).
            <br />
            <br />
            <span className="font-bold font-[18px]">
              OUTROS USOS DE INFORMAÇÕES DO DISPOSITIVO:
            </span>
            <br />
            <br />
            Retargeting As
            <br />
            estratégias de Retargeting utilizam diversas informações sobre o
            usuário para direcionar anúncios de forma mais eficaz.
            <br />
            <br />
            Histórico de Navegação: As páginas visualizadas e os produtos ou
            serviços que aparecem são informações valiosas para criar anúncios
            direcionados.
            <br />
            <br />
            Comportamento de Compra: Informações sobre compras anteriores, itens
            adicionais ao carrinho de compras e produtos visualizados podem ser
            usados ​​para fornecer produtos relacionados ou ofertas especiais.
            <br />
            <br />
            Interesses e Preferências: Dados sobre os interesses do usuário, com
            base em suas interações online, permitem a criação de anúncios que
            correspondam a seus gostos e preferências.
            <br />
            <br />
            Demografia: Idade, gênero, localização geográfica e outras
            informações demográficas segmentam anúncios de acordo com o
            público-alvo.
            <br />
            <br />
            Dispositivo e Plataforma: Informações sobre o dispositivo (como tipo
            de dispositivo, sistema operacional, navegador) e plataforma (como
            aplicativos móveis) são usadas para otimizar a exibição de anúncios
            em diferentes dispositivos e canais.
            <br />
            <br />
            Interações nas Redes Sociais: O comportamento do usuário nas redes
            sociais, como curtidas, compartilhamentos e comentários, pode ser
            usado para personalizar anúncios nas plataformas de mídia social.
            <br />
            <br />
            Dados de E-mail e Cadastro: Se o usuário for cadastrado em um Site
            ou tiver fornecido seu endereço de e-mail, essas informações podem
            ser usadas para retargeting por e-mail.
            <br />
            <br />
            Eventos Offline: Em alguns casos, como informações sobre eventos
            offline, como compras em lojas físicas, podem ser integradas a
            estratégias de retargeting online.
            <br />
            <br />
            Saiba que a coleta e o uso de informações para retargeting são
            realizados em conformidade com as regulamentações de privacidade e
            proteção de dados, e os usuários têm a opção de gerenciar suas
            preferências de privacidade e desativar o retargeting.
            <br />
            <br />
            <span className="font-black font-[24px]">PUBLICIDADE</span>
            <br />
            <br />
            <span className="font-black font-[18px]">Cookies</span>
            <br />
            <br />
            Os cookies são pequenos arquivos de texto armazenados no navegador
            do usuário que registra informações sobre suas atividades online,
            como Sites visitados, tempo gasto em cada página e preferências.
            Esses dados são usados ​​para personalizar anúncios com base no
            comportamento do usuário. COMPARTILHAMENTO DE SUAS INFORMAÇÕES
            PESSOAIS
            <br />
            <br />
            Nós compartilhamos suas informações pessoais com terceiros para nos
            ajudar a usá-las conforme descrito acima.  Por exemplo, nós usamos
            um fornecedor terceirizado para alimentar nossa loja virtual. 
            <br />
            <br />
            Também usamos o Google Analytics para nos ajudar a entender como
            nossos clientes usam o Site. Você pode ler mais sobre como o Google
            usa suas informações pessoais aqui:
            https://www.google.com/intl/pt-BR/policies/privacy/. Você também
            pode desativar o Google Analytics aqui:
            https://tools.google.com/dlpage/gaoptout.
            <br />
            <br />
            Por fim, podemos também compartilhar suas informações pessoais para
            cumprir com as leis e regulamentos cabíveis, para responder a uma
            intimação, mandado de busca ou outra solicitação legal de
            informações que recebermos, ou para proteger nossos direitos.
            <br />
            <br />
            <span className="font-black font-[18px]">Remarketing</span>
            <br />
            <br />
            Utilizamos uma estratégia de marketing digital para exibir anúncios
            personalizados ao interagir com o Site. Essa interação pode incluir
            visitas a páginas específicas, ações como adicionar produtos a um
            carrinho de compras, ou até mesmo apenas visualizar o serviço do
            Clube Energia. 
            <br />
            <br />
            Isso é feito por meio de anúncios direcionados que aparecem em
            diferentes plataformas online, como redes sociais, Sites de notícias
            ou de busca. Além disso, o remarketing utiliza cookies e tags de
            rastreamento para acompanhar o seu comportamento no Site para
            segmentar com anúncios relevantes. 
            <br />
            <br />
            <span className="font-black font-[24px]">
              PUBLICIDADE COMPORTAMENTAL
            </span>
            <br />
            <br />
            Conforme descrito acima, nós usamos suas informações pessoais para
            fornecer anúncios ou comunicações de marketing segmentadas que
            acreditamos ser de seu interesse.  Para saber mais sobre como a
            publicidade segmentada funciona, visite a página educacional da
            Network Advertising Initiative (“NAI”) em
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            Você pode desativar a publicidade segmentada usando os links abaixo:
             <br />
            <br /> <span className="font-bold text-[18px]">FACEBOOK</span> -
            <a
              href="https://www.facebook.com/settings/?tab=ads"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook"
              className="underline ml-2"
            >
              https://www.facebook.com/settings/?tab=ads
            </a>
            <br />
            <br />
            <span className="font-bold text-[18px]"> GOOGLE</span> -
            <a
              href="https://www.facebook.com/settings/?tab=ads"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook"
              className="underline ml-2"
            >
              https://www.google.com/settings/ads/anonymous
            </a>
            <br />
            <br />
            <span className="font-bold text-[18px]"> BING</span> -
            <a
              href="https://www.facebook.com/settings/?tab=ads"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook"
              className="underline ml-2"
            >
              https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
            </a>
            <br />
            <br />
            Além disso, é possível desativar alguns desses serviços acessando o
            portal de descadastramento da Digital Advertising Alliance em
            <a
              href="https://www.facebook.com/settings/?tab=ads"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook"
              className="underline ml-2"
            >
              http://optout.aboutads.info/.
            </a>
            <br />
            <br />
            <span className="font-black font-[24px]">NÃO RASTREAR</span>
            <br />
            <br />
            Por favor, observe que nós não alteramos a coleta de dados e as
            práticas de uso do nosso Site quando vemos um sinal de Não rastrear
            no seu navegador.
            <br />
            <br />
            <span className="font-black font-[24px]">RETENÇÃO DE DADOS</span>
            <br />
            <br />
            Ao fazer um pedido no Site, nós manteremos suas Informações do
            pedido em nossos registros a menos e até que você nos peça para
            excluir essas informações.
            <br />
            <br />
            <span className="font-black font-[24px]">MENORES DE IDADE</span>
            <br />
            <br />
            O Site não é destinado para pessoas menores de 16 anos sem a
            autorização expressa dos pais para aquisição dos nossos serviços. 
            <br />
            <br />
            <span className="font-black font-[24px]">MUDANÇAS</span>
            <br />
            <br />
            Nós podemos atualizar esta Política de privacidade periodicamente
            para refletir, por exemplo, mudanças em nossas práticas ou por
            outros motivos operacionais, legais ou regulamentares.
            <br />
            <br />
            <span className="font-black font-[24px]">FALE CONOSCO</span>
            <br />
            <br />
            Para saber mais sobre nossas práticas de privacidade, caso tenha
            dúvidas ou se quiser fazer uma reclamação, entre em contato conosco
            por e-mail em
            <span className="underline mx-2">
              clubeenergia@clubeenergia.com.br
            </span>
            ou pelo correio usando as informações abaixo:  Avenida Hercílio Luz,
            Nº 639, 101,  Florianópolis, SC, 88020000, Brasil
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
