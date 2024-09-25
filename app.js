const article = document.querySelectorAll('.project');

function addBorder(event) {
   event.target.style.border = "1px solid #028022 ";
   event.target.style.transform = "scale(1.05)";
  

}

function removerBorder(event) {
   event.target.style.border = "1px solid #222";
   event.target.style.transform = "scale(1)";
}

article.forEach(article => {
   article.addEventListener('mouseenter', addBorder);
   article.addEventListener('mouseleave', removerBorder);
});




const frontendSkills = [
   { nome:"HTML5", icone: "fab fa-html5 html-icon"},
   { nome:"CSS3", icone: "fab fa-css3-alt css-icon"},
   { nome:"JavaScript (ES6+)", icone: "fab fa-js-square js-icon"},
   { nome:"React.js", icone: "fab fa-react react-icon"},
   { nome:"Designer Responsivo",icone: "fas fa-mobile-alt"},
   { nome:"Git e Github", icone:"fab fa-git-alt git-icon"}
];

const backendSkills = [
   { nome:"Node.js", icone: "fab fa-node node-icon"},
   { nome:"Express.js", icone: "fas fa-server ex-icon"},
   { nome:"MongoDB", icone: "fas fa-database mongo-icon"},
   { nome:"SQL", icone: "fas fa-database"},
   { nome:"RESTful APIs", icone: "fas fa-link"},
   { nome:"Docker", icone: "fab fa-docker dock-icon"}
    
];

function carregarHabilidades(idElemento, habilidades) {
    const ulElement = document.getElementById(idElemento);
    habilidades.forEach(skill => {
     const li = document.createElement('li');

     const icon = document.createElement('i');
     icon.className = skill.icone;
     const skilltext = document.createTextNode(skill.nome);

     li.appendChild(icon);
     li.appendChild(skilltext)

     ulElement.appendChild(li);   
    });
}

carregarHabilidades('frontend-skills', frontendSkills);
carregarHabilidades('backend-skills', backendSkills);



window.onload = function() {
   var modal = document.getElementById('myModal');
   var closeBtn = document.getElementById('closeBtn');

   modal.style.display = 'block'; // Exibe o modal

   // Fecha o modal ao clicar no botão
   closeBtn.onclick = function() {
       modal.style.display = 'none';
   };

   // Fecha o modal ao clicar fora da caixa de conteúdo
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = 'none';
       }
   };
};

    // JavaScript para controlar o botão "Exibir Mais"
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenProjects = document.querySelectorAll('.project:not(.visible)');

    showMoreBtn.addEventListener('click', function() {
        hiddenProjects.forEach(function(project) {
            project.classList.add('visible'); // Exibe os projetos ocultos
        });

        // Oculta o botão após exibir os projetos
        showMoreBtn.style.display = 'none';
    });