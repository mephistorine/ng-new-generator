export default function buildCommand(commandOptions, commandPreset = [ `ng`, `new` ]) {
  if (!('name' in commandOptions)) {
    throw new Error(`Argument "name" is required`)
  }
  
  const result = commandPreset.slice()
  
  result.push(commandOptions.name)
  
  debugger
  
  if ('commit' in commandOptions) {
    if (commandOptions.commit) {
      result.push(`--commit`)
    }
  }
  
  if ('collection' in commandOptions) {
    if (commandOptions.collection) {
      result.push(`--collection`)
      result.push(commandOptions.collection)
    }
  }
  
  if ('createApplication' in commandOptions) {
    if (commandOptions.createApplication) {
      result.push(`--create-application`)
    }
  }
  
  if ('defaults' in commandOptions) {
    if (commandOptions.defaults) {
      result.push(`--defaults`)
    }
  }
  
  if ('directory' in commandOptions) {
    if (commandOptions.directory) {
      result.push(`--directory`)
      result.push(commandOptions.directory)
    }
  }
  
  if ('dryRun' in commandOptions) {
    if (commandOptions.dryRun) {
      result.push(`--dry-run`)
    }
  }
  
  if ('force' in commandOptions) {
    if (commandOptions.force) {
      result.push(`--force`)
    }
  }
  
  if ('inlineStyle' in commandOptions) {
    if (commandOptions.inlineStyle) {
      result.push(`--inline-style`)
    }
  }
  
  if ('inlineTemplate' in commandOptions) {
    if (commandOptions.inlineTemplate) {
      result.push(`--inline-template`)
    }
  }
  
  if ('legacyBrowsers' in commandOptions) {
    if (commandOptions.legacyBrowsers) {
      result.push(`--legacy-browsers`)
    }
  }
  
  if ('newProjectRoot' in commandOptions) {
    if (commandOptions.newProjectRoot) {
      result.push(`--new-project-root`)
    }
  }
  
  if ('packageManager' in commandOptions) {
    if (commandOptions.packageManager) {
      result.push(`--package-manager`)
    }
  }
  
  if ('prefix' in commandOptions) {
    if (commandOptions.prefix) {
      result.push(`--prefix`)
    }
  }
  
  if ('skipGit' in commandOptions) {
    if (commandOptions.skipGit) {
      result.push(`--skip-git`)
    }
  }
  
  if ('skipInstall' in commandOptions) {
    if (commandOptions.skipInstall) {
      result.push(`--skip-install`)
    }
  }
  
  if ('skipTests' in commandOptions) {
    if (commandOptions.skipTests) {
      result.push(`--skip-tests`)
    }
  }
  
  if ('strict' in commandOptions) {
    if (commandOptions.strict) {
      result.push(`--strict`)
    }
  }
  
  if ('style' in commandOptions) {
    if (commandOptions.style) {
      result.push(`--style`)
      result.push(commandOptions.style)
    }
  }
  
  if ('viewEncapsulation' in commandOptions) {
    if (commandOptions.viewEncapsulation) {
      result.push(`--view-encapsulation`)
      result.push(commandOptions.viewEncapsulation)
    }
  }
  
  return result
}
