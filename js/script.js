/*导航栏*/
let nav = document.getElementById("nav");
let navData = [
    {
        "menu": "Project",
        "subMenu": [
            {
                "name": "Description",
                "link": "#"
            },
            {
                "name": "Design",
                "link": "#"
            },
            {
                "name": "Demonstrate",
                "link": "#"
            },
            {
                "name": "Experiments",
                "link": "#"
            },
            {
                "name": "InterLab",
                "link": "#"
            },
            {
                "name": "Notebook",
                "link": "#"
            }
        ]
    },
    {
        "menu": "Parts",
        "subMenu": [
            {
                "name": "Parts Overview",
                "link": "#"
            },
            {
                "name": "Basic Parts",
                "link": "#"
            },
            {
                "name": "Composite Parts",
                "link": "#"
            }
        ]
    },
    {
        "menu": "Model",
        "subMenu": [
            {
                "name": "Condition Optimization",
                "link": "#"
            },
            {
                "name": "Standard Curve",
                "link": "#"
            },
            {
                "name": "Result",
                "link": "#"
            }
        ]
    },
    {
        "menu": "Awards",
        "subMenu": [
            {
                "name": "Applied Design",
                "link": "#"
            },
            {
                "name": "Hardware",
                "link": "#"
            },
            {
                "name": "Software",
                "link": "#"
            }
        ]
    },
    {
        "menu": "Human Practice",
        "subMenu": [
            {
                "name": "Human Practice",
                "link": "#"
            },
            {
                "name": "Education",
                "link": "#"
            }
        ]
    },
    {
        "menu": "Team",
        "subMenu": [
            {
                "name": "Team Members",
                "link": "#"
            },
            {
                "name": "Attributions",
                "link": "#"
            },
            {
                "name": "Collaboration",
                "link": "#"
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
    $('html').animate( {scrollTop: 0}, 500);
});
document.onscroll=function () {
    if($('html').scrollTop()>600)
        document.getElementById("back").style.display="block";
    else
        document.getElementById("back").style.display="none";
};