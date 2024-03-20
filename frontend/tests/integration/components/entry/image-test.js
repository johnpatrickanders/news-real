import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | entry/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Entry::Image />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Entry::Image>
        template block text
      </Entry::Image>
    `);

    assert.dom().hasText('template block text');
  });
});
