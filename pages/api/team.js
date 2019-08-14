export default (req, res) => {
    let pessoas = [
        {
            "nome": "Alex",
            "img":"static/img/pessoas/alex.jpg",
            "bio":"Formado em Ciência da Computação (Univali -2015) e possui Mestrado em Computação Aplicada (Univali-2017). Atuando principalmente em Teoria da Computação, Redes Complexas, Heurísticas e Metaheurísticas. Atualmente sou docente na Univali, desenvolvedor na Treetechs e Betricks. Gosto de esportes, filmes, músicas e estudar assuntos sobre a vida e aquele um kilo e meio de massa cinzenta, que chama de cérebro. <b> Resolve </b>.",
            "links":{
                "git": "https://github.com/alexrese",
                "mail": "alexrese@univali.br",
                "linkedin": "https://www.linkedin.com/in/alex-luciano-roesler-rese-18b23450/"
            }
        },
        {
            "nome": "Alisson",
            "img":"static/img/pessoas/alisson.jpg",
            "bio":"Formado em Ciência da Computação (Univali), com ênfase em educação, sistemas de computação e jogos. Gosto de programar e criar interfaces, no meu tempo livre costumo de assistir filmes, jogar videogames (principalmente os cooperativos) e ler histórias em quadrinhos. Bolsista CAPES PROSUC (Mestrando) no Laboratório de Inteligência Aplicada da Univali.",
            "links":{
                "site":"https://alissonsteffens.com/",
                "git": "https://github.com/AlissonSteffens",
                "linkedin": "https://www.linkedin.com/in/alisson-s-92b58a88/"
            }
        },
        {
            "nome": "Djony",
            "img":"static/img/pessoas/djony.jpg",
            "bio":"Bacharel em Administração de Empresas  com ênfase em Negócios Internacionais na University of Massachusetts - Boston (EUA). Trabalhou no ramo de Comércio Exterior e Representação Comercial de Alimentos.  Migrando para a área de TI como programador Full-Stack (Front e Back-End), com foco em desenvolvimento de web e aplicativos, gerenciamento de dados e execução de testes. Linguagens: design, javascript, SQLite, etc. Participando atualmente  no desenvolvimento do projeto Univali “Computer on the Beach” no Laboratório de Inteligência Aplicada (LIA). Além da nova paixão por programação, outros hobbies incluem praticar exercícios na praia ou na academia, apreciar uma boa culinária, e prestar suporte a colegas sempre que solicitado.",
            "links":{
                "mail": "d7ko@hotmail.com",
                "linkedin": "https://www.linkedin.com/in/djony-kolm-bb672730/"
            }
        },
        {
            "nome": "João",
            "img":"static/img/pessoas/joao.jpg",
            "bio":"Acadêmico de Ciência da Computação, pesquisador bolsista no Laboratório de Inteligência Aplicada da Univali na área de processamento de imagem para identificação de estrelas e galáxias. Um pouco esquisito, porém, apelidado carinhosamente como João Normal. Um cara da computação que não gosta tanto assim de jogos online.",
            "links":{
                "github":"https://github.com/J040",
                "mail": "joao.v.ribeiro@outlook.com",
                "linkedin": "https://www.linkedin.com/in/jo%C3%A3o-victor-ribeiro-de-jesus-b944b317b/"
            }
        },
        {
            "nome": "Jonathan",
            "img":"static/img/pessoas/jonathan.jpg",
            "bio":"Bacharel em sistemas de informação pelo Centro Universitário de Brusque - UNIFEBE. Realizei um intercâmbio na Universidade do Algarve (UALg), em Portugal. Trabalhei com suporte de sistemas ao usuário interno e com administração de banco de dados, atualmente desenvolvo trabalhos de pesquisas com ênfase em processamento de linguagem. Juntamente com outros autores, consegui aprovação em diversos eventos internacionais, nacionais e regionais, tais como, International Conference on Knowledge-Based and Intelligent Information & Engineering Systems (KES), Symposium in Information and Human Language Technology (STIL), International Conference on Teaching, Education and Learning (ICTEL), Simpósio Brasileiro de Sistemas de Informação (SBSI), Computer on the Beach (COTB) e Encontro de Ensino, Pesquisa e Extensão (ENPEX).",
            "links":{
                "github":"https://github.com/JonathanNau",
                "mail": "jonathan.naau@gmail.com",
                "linkedin": "https://www.linkedin.com/in/jonathannau/"
            }
        },
        {
            "nome": "Rodrigo",
            "img":"static/img/pessoas/rodrigo.jpg",
            "bio":"Formado em Ciência da Computação (Univali) e possui Mestrado em Computação Aplicada (Univali), atualmente cursando Doutorado em Ciência e Engenharia de Materiais (UFSC). Atuando principalmente em Processamento de Imagens, Jogos Digitais, Inteligência Artificial, Grafos e Teoria da Computação. Atualmente docente na Univali e desenvolvedor na UFSC. Jogador assíduo de Magic the Gathering, sempre atento as novas séries, sejam boas ou ruins, e procurando aprender coisas novas fora da computação, mas normalmente dentro das exatas.",
            "links":{
                "mail": "rodrily@gmail.com"
            }
        },
        {
            "nome": "Rudson",
            "img":"static/img/pessoas/rudson.jpg",
            "bio":"Além de desenvolvedor web também é acadêmico de Ciência da Computação, pesquisador no Laboratório de Inteligência Aplicada da Univali e entusiasta de teoria dos grafos e computação paralela e distribuída. Desafios são bem vindos, não mede esforços para aprender e conhecer novas tecnologias. Já superou a pestana no violão.",
            "links":{
                "site":"http://rudson.me/ndes",
                "git": "https://github.com/rudsonm",
                "linkedin": "https://www.linkedin.com/in/rudson-mendes/"
            }
        },
        {
            "nome": "Felski",
            "img":"static/img/pessoas/felski.jpg",
            "bio":"Formado em Ciência da Computação (Univali 2008) e possui Mestrado em Computação Aplicada (Univali 2012). Atuando principalmente em Sistemas Embarcados, Redes em Chip e Tolerância a Faltas. Atualmente sou docente na Univali, Unisul e Uniavan. Gosto do Escotismo, RPG, seriados, história antiga e recentemente estou me aventurando nas áreas de microeletrônica e mobile.",
            "links":{
                "site":"http://rudson.me/ndes",
                "git": "https://github.com/rudsonm",
                "linkedin": "https://www.linkedin.com/in/rudson-mendes/"
            }
        },
    ]
    res.json(pessoas)
  }
  