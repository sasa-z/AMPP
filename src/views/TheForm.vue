<template>
    <div>
        <form>
        <the-input
            v-model="event.description"
            label="Description"
            type="text"
        />
        <br>
            <br>
        <the-select
            :options="categories"
            v-model="event.category"
            label="Select a category"

        
        />
        <br>
            <br>
            <the-checkbox
                v-model="event.extras.catering"
                label="Catering"
            
            />
            
       
        </form>
        <div>
            <br>
            <br>
            <pre>{{ event }}</pre>
        </div>
    </div>
</template>

<script>
import TheInput from '@/components/TheInput.vue';
import TheSelect from '@/components/TheSelect.vue';
import TheCheckbox from '@/components/TheCheckbox.vue';

    export default {
        components: {
            TheInput,
            TheSelect,
            TheCheckbox,
        },

    data() {
        return {
            categories: [
                'sustainability',
                'nature',
                'animal welfare',
                'housing',
                'education',
                'food',
                'community'
            ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
            
        }
    },
        
    }
</script>

<style  scoped>

</style>