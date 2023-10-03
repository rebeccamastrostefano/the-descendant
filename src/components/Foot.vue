<script>
</script>

<template>
    <div class="divider"></div>
    <div class="foot container-fluid">
        <div class="content">
            <img src="./../assets/img/LogoWhite.png" alt="">
            <div class="line"></div>
            <p>
            <div class="mb-3">Thank you for visiting The Descendant!</div>
            For more enchanting tales, join us on Instagram and delve deeper into the mystical world by reading the full
            story. May the ancient spirits guide your path and ignite your imagination.
            <div class="mt-3">Read the full story on our website and follow us on Instagram for more.</div>
            </p>
            <div class="social">
                <a href="https://www.instagram.com/the_descendant_project/"><i
                        class="fa-brands fa-instagram"></i>the_descendant_project</a>

                <a href="https://rebeccamastrostefano.github.io/map-descendant//The_Descendant.pdf"><i
                        class="fa-solid fa-file-pdf"></i>Read full story</a>

                <a href="https://github.com/rebeccamastrostefano"><i class="fa-brands fa-github"></i>Rebecca
                    Mastrostefano</a>

                <a href="https://github.com/GiulioDangelo"><i class="fa-brands fa-github"></i>Giulio D'Angelo</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.foot {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
}

.divider {
    height: 40px;
    background-size: contain;
    width: 100%;
    background-image: url("../assets/img/divider.png");
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;
    text-align: center;
    padding: 20px;
}

.line {
    height: 1px;
    width: 60%;
    background-color: white;
    margin: 10px 0;
}

.social {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
}

a {
    text-decoration: none;
    color: rgb(208, 150, 58);
    margin-inline: 5px;
    font-size: 18px;
}

i {
    font-size: 18px;
    margin-inline: 5px;
    color: white;
}

a:hover {
    color: white;
}
</style>