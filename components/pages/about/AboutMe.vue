<template>
    <div class="container">
        <div class="about-me__section">
            <div class="about-me__image">
                <img src="@/assets/images/avatar/i.jpg" alt="This is me">
            </div>
            <div class="about-me__info">
                <h1>Hi, I'm Brooklin!</h1>
                <p>
                    I'm a UX designer, prototyper, and a part-time 3D artist. I'm currently a Working at <strong>Fraxos</strong>, working
                    remotely from Boston. If you're a creative in Boston, say hi!
                    <br>
                    <br>
                    Most recently, I was a Senior UX Designer at Delphia. Before that, I
                    worked at startups in Seoul such as Dable, Pinch, Creatrip, and Dotface. Before that, I was a design intern
                    at Adobe in San Francisco.
                    <br>
                    <br>
                    I love words that start with P: people, process, problem solving, paper sketches, prototyping, programming,
                    polished design, pixel-perfect products, design system, UI animation, and Simulated Reality
                </p>
                <div class="about-me__buttons">
                    <button class="btn">Resume <Icon name="line-md:download-loop"></Icon></button>
                    <ul>
                        <li><a href="#!">LinkedIn</a></li>
                        <li><a href="#!">Instagram</a></li>
                        <li><a href="#!">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineComponent({name: 'AboutMe'})
</script>