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
                "name": "Experiments",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Experiments"
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
        "subMenu": [
            {
                "name": "Parts Overview",
                "link": "http://2018.igem.org/Team:DLUT_China_B/PartsOverview"
            },
            {
                "name": "Basic Parts",
                "link": "http://2018.igem.org/Team:DLUT_China_B/BasicParts"
            },
            {
                "name": "Composite Parts",
                "link": "http://2018.igem.org/Team:DLUT_China_B/CompositeParts"
            }
        ]
    },
    {
        "menu": "Model",
        "subMenu": [
            {
                "name": "Condition Optimization",
                "link": "http://2018.igem.org/Team:DLUT_China_B/ConditionOptimization"
            },
            {
                "name": "Standard Curve",
                "link": "http://2018.igem.org/Team:DLUT_China_B/StandardCurve"
            },
            {
                "name": "Result",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Result"
            }
        ]
    },
    {
        "menu": "Awards",
        "subMenu": [
            {
                "name": "Applied Design",
                "link": "http://2018.igem.org/Team:DLUT_China_B/AppliedDesign"
            },
            {
                "name": "Hardware",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Hardware"
            },
            {
                "name": "Software",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Software"
            }
        ]
    },
    {
        "menu": "Human Practice",
        "subMenu": [
            {
                "name": "Human Practice",
                "link": "http://2018.igem.org/Team:DLUT_China_B/HumanPractice"
            },
            {
                "name": "Education",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Education"
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
                "name": "Collaboration",
                "link": "http://2018.igem.org/Team:DLUT_China_B/Collaboration"
            }
        ]
    }
];
let ul = document.createElement("ul");
ul.setAttribute("class", "menu");
let home=document.createElement("li");
let homeName=document.createElement("a");
homeName.innerText=navData[0]["menu"];
homeName.setAttribute("href",navData[0]["link"]);
home.appendChild(homeName);
ul.appendChild(home);
for (let i = 1; i < navData.length; ++i) {
    let menu = document.createElement("li");
    let menuName = document.createElement("a");
    menuName.innerText = navData[i]["menu"];
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