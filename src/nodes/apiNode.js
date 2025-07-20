import { BaseNode } from './baseNode';
import { apiNodeConfig } from './nodeConfigs/apiConfig';

export const ApiNode = (props) => <BaseNode {...props} config={apiNodeConfig} />;
