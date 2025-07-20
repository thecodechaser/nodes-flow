import { BaseNode } from './baseNode';
import { mathNodeConfig } from './nodeConfigs/mathConfig';

export const MathNode = (props) => <BaseNode {...props} config={mathNodeConfig} />;
