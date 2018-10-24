/*导航栏*/
let nav = document.getElementById("nav");
let navData = [
    {
        "menu": "Home",
        "link": "http://2018.igem.org/Team:DLUT_China_B"
    },
    {
        "menu": "Project",
        "subMenu": [
            {
                "name": "Description",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Description"
            },
            {
                "name": "Design",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Design"
            },
            {
                "name": "Demonstrate",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Demonstrate"
            },
            {
                "name": "InterLab",
                "link": "http://2018.igem.org/Team:DLUT_China_B/InterLab"
            },
            {
                "name": "Notebook",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Notebook"
            }
        ]
    },
    {
        "menu": "Parts",
        "link": "http://2018.igem.org/Team:DLUT_China_B/Parts"
    },
    {
        "menu": "Model",
        "subMenu": [
            {
                "name": "Gray Value-Concentration Model",
                "link": "http://2018.igem.org/Team:DLUT_China_B/GrayValueConcentrationModel"
            },
            {
                "name": "Kinetic Model",
                "link": "http://2018.igem.org/Team:DLUT_China_B/KineticModel"
            },
            {
                "name": "Liquid Crystal Molecules Perturbations Model",
                "link": "http://2018.igem.org/Team:DLUT_China_B/LiquidCrystalMoleculesPerturbationsModel"
            }
        ]
    },
    {
        "menu": "Awards",
        "subMenu": [
            {
                "name": "Applied Design",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Applied_Design"
            },
            {
                "name": "Hardware",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Hardware"
            }
        ]
    },
    {
        "menu": "Human Practices",
        "subMenu": [
            {
                "name": "Human Practices",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Human_Practices"
            },
            {
                "name": "Public Engagement",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Public_Engagement"
            }
        ]
    },
    {
        "menu": "Team",
        "subMenu": [
            {
                "name": "Team Members",
                "link": "http://2018.igem.org/Team:DLUT_China_B/TeamMembers"
            },
            {
                "name": "Attributions",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Attributions"
            },
            {
                "name": "Collaborations",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Collaborations"
            }
        ]
    }
];
let ul = document.createElement("ul");
ul.setAttribute("class", "menu");
for (let i = 0; i < navData.length; ++i) {
    let menu = document.createElement("li");
    let menuName = document.createElement("a");
    menuName.innerText = navData[i]["menu"];

    if(navData[i].hasOwnProperty("subMenu")) {
        let subMenu = document.createElement("ul");
        subMenu.setAttribute("class", "subMenu");
        for (let j = 0; j < navData[i]["subMenu"].length; ++j) {
            let subMenuName = document.createElement("li");
            let subMenuNameA = document.createElement("a");
            subMenuNameA.innerText = navData[i]["subMenu"][j]["name"];
            subMenuNameA.setAttribute("href", navData[i]["subMenu"][j]["link"]);
            subMenuName.appendChild(subMenuNameA);
            subMenu.appendChild(subMenuName);
        }
        menu.appendChild(menuName);
        menu.appendChild(subMenu);
    }
    else {
        menuName.setAttribute("href", navData[i]["link"]);
        menu.appendChild(menuName);
    }
    ul.appendChild(menu);
}
document.getElementById('nav').appendChild(ul);

/*至顶按钮*/
$('#back').click(function () {
    if(navigator.userAgent.indexOf("Edge")>-1)
        $('body').animate( {scrollTop: 0}, 500);
    else
        $('html').animate( {scrollTop: 0}, 500);
});
function topToggle() {
    if($(window).scrollTop()>600)
        document.getElementById("back").style.display="block";
    else
        document.getElementById("back").style.display="none";
}
