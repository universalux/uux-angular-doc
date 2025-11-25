export const expandGroupDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-expand-group`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-expand-group@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-expand-group@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
      @Component({
        selector: 'app',
        standalone: true,
        imports: [ NgExpand, NgExpandGroup ],
        template: \`
          <ng-expand-group (expandedItem)="expandedItemSignal.set($event)>
            <ng-expand label="Expand button label 1">
              <p>This is the content 1</p>
            </ng-expand>
            <ng-expand label="Expand button label 2">
              <p>This is the content 2</p>
            </ng-expand>
          </ng-expand-group>
        \`,
      })
      export class App {
        expandedItemSignal = signal<number | null>(null);
      }`,
  },
  stylingCode_1: {
    language: 'css',
    code: `
      ng-expand-group {
        padding: 10px 20px;
        --expand-group-gap: 1rem;
      }
    `
  }
} as const;

export type ExpandGroupDocCode = typeof expandGroupDocCode;
