<template>
    <v-container fluid grid-list-md>
    <v-layout row wrap>

          <app-ministry-grid-element
            v-for="ministry in ministries"
            :data="ministry"
            :key="ministry.id"
            :ministry='ministry'>
          </app-ministry-grid-element>

      </v-layout>
    </v-container>


</template>

<script>
import MinistryGridElement from './MinistryGridElement'
export default {
  data: function () {
    return {
      ministries: [
        {
          id: 0,
          day: 15,
          month: 'luty',
          location: 'Błociszewo',
          locationType: 'v'
        },
        {
          id: 1,
          day: 30,
          month: 'Kwiecień',
          location: 'Książ WLKP',
          locationType: 'v'
        },
        {
          id: 2,
          day: 15,
          month: 'luty',
          location: 'Pasrskie',
          locationType: 'c'
        },
        {
          id: 3,
          day: 11,
          month: 'Kwiecień',
          location: 'Śrem',
          locationType: 'c'
        },
        {
          id: 4,
          day: 12,
          month: 'luty',
          location: 'Brzękotki',
          locationType: 'v'
        },
        {
          id: 5,
          day: 30,
          month: 'Kwiecień',
          location: 'Psarskie',
          locationType: 'c'
        },
        {
          id: 6,
          day: 1,
          month: 'luty',
          location: 'Brzękotki',
          locationType: 'v'
        },
        {
          id: 7,
          day: 30,
          month: 'Kwiecień',
          location: 'Śrem',
          locationType: 'v'
        }
      ]
    }
  },
  components: {
    'app-ministry-grid-element': MinistryGridElement
  }
}
</script>




