import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default [
  {
    path: '/',
    name: 'Hello',
    component: Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}