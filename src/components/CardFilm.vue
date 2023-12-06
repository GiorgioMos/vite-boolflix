<script>
export default {
    name: "CardFilm",
    props: {
        image: String,
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        overview: String
    }, methods: {
        flag(lingua) {
            let converti = [];
            converti["EN"] = "GB";
            converti["JA"] = "JP";
            converti["KO"] = "KR";
            converti["ZH"] = "CN";
            converti["HI"] = "IN";
            converti["FA"] = "IR";
            converti["TA"] = "IN";
            converti["UR"] = "PK";
            converti["TE"] = "IN";
            converti["CS"] = "CZ";
            converti["JV"] = "ID";
            converti["DA"] = "DK";
            converti["EL"] = "GR";
            converti["HE"] = "IL";
            lingua = converti[lingua] == undefined ? lingua : converti[lingua];
            return `https://flagsapi.com/${lingua}/flat/48.png`
        },
        votoStelle(voto) {
            return Math.round(voto * 10);
        }
    }
}
</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner h-100 w-100 position-relative">
            <div class="flip-card-front h-100 w-100 position-absolute bg-warning">
                <div v-if="image == null" class="text-center pt-5">
                    <h2 class="text-center p-2 fw-bold"> {{ title.toUpperCase() }} </h2>
                    <span>Locandina non trovata</span>
                </div>
                <img :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="title" class="w-100 h-100" v-else>
            </div>
            <div class="flip-card-back h-100 w-100 position-absolute bg-black text-white overflow-scroll text-center p-2">
                <h4 class="fw-bold">{{ title }}</h4>
                <h5 v-if="title != originalTitle" class="text-warning">{{ originalTitle }}</h5>
                <div>
                    <img :src="flag(language)" :alt="`Lingua: ${language}`" />
                </div>
                <div class="stars-outer d-inline-block position-relative fs-2">
                    <div class="stars-inner position-absolute overflow-hidden fs-2" :style="`width: ${votoStelle(vote)}%`">
                    </div>
                </div>
                <p>{{ overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';

.stars-outer:before {
    content: "\2606 \2606 \2606 \2606 \2606";
}

.stars-inner {
    top: 0;
    left: 0;
    white-space: nowrap;

    &::before {
        content: "\2605 \2605 \2605 \2605 \2605";
        color: #f8ce0b;
    }
}

.flip-card {
    width: 332px;
    height: 503px;
    perspective: 1000px;
}

.flip-card-inner {
    transition: transform 0.3s;
    transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
    backface-visibility: hidden;
}

.flip-card:hover .flip-card-inner,
.flip-card-back {
    transform: rotateX(180deg);
}
</style>