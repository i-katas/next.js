import React from 'react'
import Enzyme, {render, shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

Object.assign(global, {React, shallow: shallow, render: render, mount: mount})
