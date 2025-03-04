<template>
    <div class="createcategory">
        <CreateCategory />
    </div>
</template>

<script>
import CreateCategory from '@/components/admin/CreateCategoryComponent';

export default {
    name: 'CreateCategoryView',
    components: {
        CreateCategory
    }
}
</script>