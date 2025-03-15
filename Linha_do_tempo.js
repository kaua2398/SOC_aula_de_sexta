document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".event");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <img id="modal-image" src="ataque_Ciberneticos.jpg" width="800" height="300" alt="Ataque Cibernético">
            <p id="modal-description"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = modal.querySelector(".close");

    const attackData = {
        "2000": { title: "Virus ILOVEYOU", image: "iloveyou.jpg", description: "O vírus (ILOVEYOU), também conhecido como (Love Bug), foi um dos vírus de computador mais devastadores da história, causando bilhões de dólares em danos e infectando milhões de computadores em questão de dias em maio de 2000. O vírus se disfarçava de uma carta de amor, com o assunto (ILOVEYOU) e um anexo chamado (LOVE-LETTER-FOR-YOU.TXT.vbs). A curiosidade e o apelo emocional da mensagem levavam as pessoas a abrir o anexo, que era um script VBScript, uma linguagem de programação usada para automatizar tarefas no Windows. Ao ser executado, o script se replicava e se enviava para todos os contatos da vítima no Microsoft Outlook. Além de se replicar, o vírus também sobrescrevia arquivos de mídia (imagens, músicas, vídeos) e alguns documentos, causando a perda de dados importantes. O ataque do vírus (ILOVEYOU) destacou a importância da conscientização sobre segurança cibernética e levou a melhorias nos softwares antivírus e nas práticas de segurança cibernética. As pessoas aprenderam a ter mais cuidado ao abrir anexos de e-mail, especialmente de remetentes desconhecidos." },
        "2010": { title: "Stuxnet", image: "stuxnet.jpg", description: "O Stuxnet é um worm de computador complexo e sofisticado, notório por ter sido utilizado para atacar o programa nuclear iraniano em 2010. Diferentemente de vírus comuns, o Stuxnet foi projetado para sabotar sistemas de controle industrial (SCADA), especificamente os utilizados em centrífugas de enriquecimento de urânio. O Stuxnet foi meticulosamente criado para atingir sistemas SCADA da Siemens, que controlavam as centrífugas de enriquecimento de urânio no Irã. Sua precisão demonstra um alto nível de planejamento e conhecimento específico dos sistemas industriais. O worm explorou múltiplas vulnerabilidades 'dia zero' no sistema operacional Windows, o que significa que essas falhas eram desconhecidas até o ataque. Ele utilizou certificados digitais roubados para se disfarçar como software legítimo, dificultando sua detecção. O Stuxnet se espalhava por meio de pendrives infectados, alcançando sistemas que não estavam conectados à internet. Uma vez dentro do sistema SCADA, ele manipulava a velocidade das centrífugas, causando danos físicos sem alertar os operadores. O worm também foi projetado para esconder suas ações, dificultando a detecção da sabotagem. O Stuxnet danificou significativamente as centrífugas de enriquecimento de urânio iranianas, atrasando o programa nuclear do país. O ataque marcou o início de uma nova era de guerra cibernética, demonstrando o potencial de malware para causar danos físicos em infraestruturas críticas. O Stuxnet é considerado a primeira arma cibernética conhecida a causar danos físicos no mundo real. Sua complexidade e alvo específico sugerem que foi desenvolvido por um Estado-nação. O Stuxnet evidenciou a vulnerabilidade de sistemas industriais a ataques cibernéticos. Em resumo, o Stuxnet representa um marco na história da segurança cibernética, revelando a capacidade de malware para além do roubo de dados, com o potencial de causar destruição física em infraestruturas cruciais." },
        "2014": { title: "Sony Pictures Hack", image: "sony.jpg", description: "O ataque cibernético à Sony Pictures Entertainment (SPE) em 2014 foi um incidente de grande repercussão, marcado pelo vazamento de dados confidenciais e tensões geopolíticas. Em 24 de novembro de 2014, um grupo de hackers autodenominado 'Guardiões da Paz' invadiu os sistemas da SPE, roubando cerca de 100 terabytes de dados. Entre as informações vazadas, estavam e-mails de funcionários, roteiros de filmes, dados financeiros, filmes inéditos e informações pessoais de funcionários e atores. Além do vazamento de dados, os hackers exigiram o cancelamento do lançamento do filme 'The Interview', uma sátira sobre o líder norte-coreano Kim Jong-un, sob ameaça de ataques terroristas. A Sony inicialmente cedeu, mas posteriormente lançou o filme em plataformas digitais e cinemas independentes. O governo dos Estados Unidos atribuiu o ataque à Coreia do Norte, que negou envolvimento. O incidente gerou tensões diplomáticas entre os dois países e evidenciou a vulnerabilidade de grandes empresas a ataques cibernéticos. O ataque à Sony Pictures teve um impacto significativo na indústria cinematográfica e na segurança cibernética, destacando a importância da proteção de dados confidenciais e as implicações geopolíticas dos ataques cibernéticos." },
        "2017": { title: "WannaCry Ransomware", image: "wannacry.jpg", description: "O WannaCry foi um ataque de ransomware global que impactou milhões de computadores em mais de 150 países em maio de 2017. O ataque se espalhou rapidamente, explorando uma vulnerabilidade chamada EternalBlue no sistema operacional Windows, que permitia que o ransomware se espalhasse rapidamente por redes de computadores, sem a necessidade de interação do usuário. Uma vez que um computador era infectado, o WannaCry criptografava os arquivos do usuário, tornando-os inacessíveis, e exibia uma mensagem exigindo um resgate em Bitcoin para descriptografar os arquivos. O ransomware ameaçava aumentar o valor do resgate e excluir os arquivos permanentemente se o pagamento não fosse feito em um determinado período. O ataque afetou uma ampla gama de organizações, incluindo hospitais, empresas de telecomunicações, empresas de logística e agências governamentais, e causou bilhões de dólares em danos em todo o mundo. O ataque do WannaCry destacou a importância de manter os sistemas operacionais atualizados com os patches de segurança mais recentes e de implementar medidas de segurança cibernética robustas, como firewalls, software antivírus e backups de dados." },
        "2021": { title: "Colonial Pipeline Attack", image: "colonial.jpg", description: "O ataque à Colonial Pipeline em maio de 2021 foi um incidente de ransomware que causou interrupções significativas no fornecimento de combustível na Costa Leste dos Estados Unidos. Em 7 de maio de 2021, a Colonial Pipeline, que opera o maior oleoduto de combustível dos EUA, foi alvo de um ataque de ransomware realizado pelo grupo de hackers DarkSide, que criptografou os sistemas de computador da empresa. Como resultado do ataque, a Colonial Pipeline foi forçada a interromper as operações do oleoduto, que transporta cerca de 45% do combustível consumido na Costa Leste dos EUA. A interrupção causou escassez de combustível, aumento de preços e pânico entre os consumidores. A Colonial Pipeline pagou um resgate de US$ 4,4 milhões em Bitcoin aos hackers para obter a chave de descriptografia e restaurar seus sistemas. Posteriormente, o FBI conseguiu recuperar parte do pagamento. O ataque destacou a vulnerabilidade da infraestrutura crítica dos EUA a ataques cibernéticos, levantou preocupações sobre a segurança da informação em empresas que operam infraestruturas essenciais e aumentou a conscientização sobre os perigos do ransomware e a importância de medidas de segurança cibernética robustas. O ataque à Colonial Pipeline demonstrou o potencial de ataques cibernéticos para causar interrupções significativas na economia e na vida cotidiana, evidenciou a necessidade de fortalecer a segurança cibernética em infraestruturas críticas e mostrou como o ransomware pode gerar lucros para grupos criminosos, incentivando a prática de novos ataques." }
    };

    events.forEach(event => {
        event.addEventListener("click", () => {
            const year = event.querySelector(".year").textContent;
            if (attackData[year]) {
                modalTitle.textContent = attackData[year].title;
                modalImage.src = attackData[year].image;
                modalDescription.textContent = attackData[year].description;
                modal.style.display = "flex";
            }
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
