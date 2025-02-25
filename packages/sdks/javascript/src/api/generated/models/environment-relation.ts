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


import { EnvironmentType } from './environment-type';

/**
 * 
 * @export
 * @interface EnvironmentRelation
 */
export interface EnvironmentRelation {
    /**
     * Unique id of the given record
     * @type {number}
     * @memberof EnvironmentRelation
     */
    id: number;
    /**
     * Environment\'s name
     * @type {string}
     * @memberof EnvironmentRelation
     */
    name: string;
    /**
     * 
     * @type {EnvironmentType}
     * @memberof EnvironmentRelation
     */
    type: EnvironmentType;
    /**
     * The human readable version of the type
     * @type {string}
     * @memberof EnvironmentRelation
     */
    type_human_readable: string;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof EnvironmentRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof EnvironmentRelation
     */
    updated_at: string;
}

