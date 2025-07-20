// outputNode.js

import { BaseNode } from './baseNode';
import { outputNodeConfig } from './nodeConfigs/outputConfig';

export const OutputNode = (props) => <BaseNode {...props} config={outputNodeConfig} />;

