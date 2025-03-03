<template>
    <div class="movie">
        <Cart />
    </div>
</template>

<script>
import Cart from '@/components/CartComponent';

export default {
    name: 'CartView',
    components: {
        Cart
    }
}
</script>