import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      title: 'Appeals Court to Decide if Texas Can Begin Arresting Migrant',
      source: 'The New York Times',
      city: 'n/a',
      summary: 'The court halted a new state law after it briefly took effect. <br>Judges will now hear arguments on whether it can be enforced during the appeals process.',
      category: 'n/a',
      type: 'Breaking',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      take: 'I\'m really bothered by this. Why does Abbott push for these laws?',
    };
  }
}