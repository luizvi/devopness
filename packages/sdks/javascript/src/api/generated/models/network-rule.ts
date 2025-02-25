/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ActionRelation } from './action-relation';
import { EnvironmentRelation } from './environment-relation';
import { NetworkRuleProtocol } from './network-rule-protocol';
import { NetworkRuleType } from './network-rule-type';
import { ServerRelation } from './server-relation';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface NetworkRule
 */
export interface NetworkRule {
    /**
     * The ID of the given network rule
     * @type {number}
     * @memberof NetworkRule
     */
    id: number;
    /**
     * The rule\'s name/description/reminder
     * @type {string}
     * @memberof NetworkRule
     */
    name: string;
    /**
     * 
     * @type {NetworkRuleType}
     * @memberof NetworkRule
     */
    type: NetworkRuleType;
    /**
     * 
     * @type {NetworkRuleProtocol}
     * @memberof NetworkRule
     */
    protocol: NetworkRuleProtocol;
    /**
     * Starting range of network ports to be considered by this rule
     * @type {number}
     * @memberof NetworkRule
     */
    port_from: number;
    /**
     * Ending range of network ports to be considered by this rule
     * @type {number}
     * @memberof NetworkRule
     */
    port_to: number;
    /**
     * Starting range of the public ipv4 or ipv6 addresses that can access this rule
     * @type {string}
     * @memberof NetworkRule
     */
    ip_address_from: string | null;
    /**
     * Ending range of the public ipv4 or ipv6 addresses that can access this rule
     * @type {string}
     * @memberof NetworkRule
     */
    ip_address_to: string | null;
    /**
     * Indicates if the network rule was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof NetworkRule
     */
    auto_generated: boolean;
    /**
     * 
     * @type {ActionRelation}
     * @memberof NetworkRule
     */
    last_action: ActionRelation | null;
    /**
     * 
     * @type {UserRelation}
     * @memberof NetworkRule
     */
    created_by_user: UserRelation;
    /**
     * 
     * @type {EnvironmentRelation}
     * @memberof NetworkRule
     */
    environment: EnvironmentRelation | null;
    /**
     * 
     * @type {Array<ServerRelation>}
     * @memberof NetworkRule
     */
    servers: Array<ServerRelation>;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof NetworkRule
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof NetworkRule
     */
    updated_at: string;
}

