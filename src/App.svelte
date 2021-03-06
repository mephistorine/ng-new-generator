<script>
  import { get, writable } from 'svelte/store'
  import camelize from './camelize'
  import buildCommand from './build-command'

  import '../node_modules/normalize.css/normalize.css'

  const form = writable({})

  /**
   * @type HTMLFormElement
   */
  let formElementRef

  /**
   * @type HTMLPreElement
   */
  let commandResultRef

  form.subscribe((formValue) => {
    commandResultRef.innerHTML = buildCommand(formValue)
  })

  function updateFormValue(partialFormValue) {
    form.set({
      ...get(form),
      ...partialFormValue
    })
  }

  /**
   * Input event handler
   *
   * @param {InputEvent} event Input event
   * @returns void
   */
  function handleInputChange(event) {
    const target = event.target

    let value

    switch (target.type) {
      case 'checkbox': {
        value = target.checked
        break
      }

      default: {
        value = target.value
      }
    }

    updateFormValue({
      [ camelize(target.name) ]: value
    })
  }

  /**
   *
   * @param {PointerEvent} event
   */
  function onClickCopyButton(event) {
    console.log(event)
  }
</script>

<main class="container">
  <header class="header">
    <img class="logo" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular logo">
    <h1>ng-new-generator</h1>
    <button on:click={onClickCopyButton}>Copy</button>
  </header>

  <div class="command-result-container">
    <pre id="command-result" bind:this={commandResultRef}></pre>
  </div>

  <div class="command-settings">
    <form bind:this={formElementRef} enctype="multipart/form-data">
      <p class="field">
        <label for="name">Name</label>
        <input on:input={handleInputChange} id="name" type="text" name="name" value="angular-awesome">
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} type="checkbox" name="commit" checked>
          <span>Commit</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} type="checkbox" name="create-application" checked>
          <span>Create application</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="defaults" type="checkbox">
          <span>Defaults</span>
        </label>
      </p>

      <p class="field">
        <label for="directory">Directory</label>
        <input on:input={handleInputChange} id="directory" type="text" name="directory">
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="dry-run" type="checkbox">
          <span>Dry run</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="force" type="checkbox">
          <span>Force</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="inline-style" type="checkbox">
          <span>Inline style</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="inline-template" type="checkbox">
          <span>Inline template</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="interactive" type="checkbox">
          <span>Interactive</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="legacy-browsers" type="checkbox">
          <span>
            <s>Legacy browsers</s>
          </span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="minimal" type="checkbox">
          <span>Minimal</span>
        </label>
      </p>

      <p class="field">
        <label for="new-project-root">New project root</label>
        <input on:input={handleInputChange} id="new-project-root" type="text" name="new-project-root">
      </p>

      <fieldset>
        <legend>Package manager</legend>
        <p>
          <label>
            <input on:input={handleInputChange} type="radio" name="package-manager" value="npm">
            NPM
          </label>
        </p>
        <p>

          <label>
            <input on:input={handleInputChange} type="radio" name="package-manager" value="yarn">
            Yarn
          </label>
        </p>
        <p>

          <label>
            <input on:input={handleInputChange} type="radio" name="package-manager" value="pnpm">
            PNPM
          </label>
        </p>
        <p>

          <label>
            <input on:input={handleInputChange} type="radio" name="package-manager" value="cnpm">
            CNPM
          </label>
        </p>
      </fieldset>

      <p class="field">
        <label for="prefix">Prefix</label>
        <input on:input={handleInputChange} id="prefix" type="text" name="prefix">
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="routing" type="checkbox">
          <span>Routing</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="skip-git" type="checkbox">
          <span>Skip GIT</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="skip-install" type="checkbox">
          <span>Skip install</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="skip-tests" type="checkbox">
          <span>Skip tests</span>
        </label>
      </p>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="strict" type="checkbox" checked>
          <span>Strict</span>
        </label>
      </p>

      <fieldset>
        <legend>Style</legend>
        <p>
          <label>
            <input on:input={handleInputChange} type="radio" name="style" value="css">
            CSS
          </label>
        </p>
        <p>

          <label>
            <input on:input={handleInputChange} type="radio" name="style" value="scss">
            SCSS
          </label>
        </p>
        <p>

          <label>
            <input on:input={handleInputChange} type="radio" name="style" value="sass">
            SASS
          </label>
        </p>
        <p>

          <label>
            <input on:input={handleInputChange} type="radio" name="style" value="less">
            LESS
          </label>
        </p>
      </fieldset>

      <p class="field">
        <label>
          <input on:input={handleInputChange} name="verbose" type="checkbox">
          <span>Verbose</span>
        </label>
      </p>

      <fieldset>
        <legend>View encapsulation</legend>
        <p>
          <label>
            <input on:input={handleInputChange} type="radio" name="view-encapsulation" value="css">
            Emulated
          </label>
        </p>
        <p>
          <label>
            <input on:input={handleInputChange} type="radio" name="view-encapsulation" value="scss">
            None
          </label>
        </p>
        <p>
          <label>
            <input on:input={handleInputChange} type="radio" name="view-encapsulation" value="sass">
            ShadowDom
          </label>
        </p>
      </fieldset>
    </form>
  </div>
</main>

<style>
  :global(html) {
    font-size: 16px;
  }

  :global(body) {
    margin: 0;
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 1rem;
  }

  .header {
    display: grid;
    align-items: center;
    grid-template-columns: 70px 1fr auto;
  }

  .logo {
    width: 70px;
  }

  .command-result-container {
    background-color: #dbdbdb;
    margin-bottom: 1rem;
  }

  .command-result-container pre {
    margin: 0;
    padding: 1rem;
  }
</style>
