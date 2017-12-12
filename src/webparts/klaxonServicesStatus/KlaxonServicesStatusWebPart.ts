import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'KlaxonServicesStatusWebPartStrings';
import KlaxonServicesStatus from './components/KlaxonServicesStatus';
import { IKlaxonServicesStatusProps } from './components/IKlaxonServicesStatusProps';

export interface IKlaxonServicesStatusWebPartProps {
  description: string;
}

export default class KlaxonServicesStatusWebPart extends BaseClientSideWebPart<IKlaxonServicesStatusWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IKlaxonServicesStatusProps > = React.createElement(
      KlaxonServicesStatus,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
