<template>
    <div class = "principal">
        <header class="header">
            <img class="header__img" src="../assets/Star_Wars_Logo.png"  alt="logo Star Wars">
            <div class="header__menu">
            <div class="header__menu--profile">
            <img src="../assets/user-icon.png" alt="">
            
            </div>
                <ul>
                <li><a href="http://localhost:8080/#/planetas">Planetas</a></li>
                <li><a href="http://localhost:8080/#/naves">Naves</a></li>
                <li><a href="http://localhost:8080/#vehiculos/">Vehiculos</a></li>
                <li><a href="http://localhost:8080/#/">Página principal</a></li>
                </ul>
            </div>
        </header>
        <section class="descripcion">
            <p>scrap personas​</p>
        </section>
        <footer class="principal-footer"></footer>
    </div>
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.principal {
    background: black;
    margin: 0;
}
.header {
    align-items: center;
    background: black;
    color: white;
    display: flex;
    height: 100px;
    justify-content: space-between;
    top: 0px;
    width: 100%;
}

.header__img {
    margin-left: 30px;
    width: 100px;
}

.header__menu {
	margin-right: 30px;
}

.header__menu ul {
    display: none;
    list-style: none;
    margin: 0px 0px 0px -20px;
    padding: 0px;
    position: absolute;
    width: 100px;
    text-align: center;
}

.header__menu:hover ul, ul:hover {
	display: block;
}

.header__menu li {
    margin: 10px 0px;
}

.header__menu li a {
    color: #F1C40F;
    text-decoration: none;
}

.header__menu li a:hover {
    text-decoration: underline;
}

.header__menu--profile {
    align-items: center;
    display: flex;
    cursor: pointer;
}

.header__menu--profile img {
    margin-right: 8px;
    width: 60px;
}
.descripcion {
    background: black;
    color: white;
    display: flex;
    flex-direction: row;
    width: 33.3%;
    height: 625px;
    justify-content: center;
    margin-left: 33.3%;
    text-align: center;
    font-size: 25px;
}

</style>