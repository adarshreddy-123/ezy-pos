<template>
    <div class="main-div">
        <div v-if="isLoading" class="loader"></div>
        <h3>Ezy-Pos</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true
        };
    }
};
</script>

<style>
.main-div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
}

.main-div h3 {
    color: #e23744;
    margin-left: 15px;
    font-weight: 500;
    text-shadow: 1px 2px 4px #e23744;
    letter-spacing: 6px;
}

.loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #e23744;
    box-shadow: 1px 2px 4px #e23744;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 0.9s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
}

    100% {
        transform: rotate(360deg);
    }
}
</style>