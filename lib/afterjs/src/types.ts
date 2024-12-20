import {
  RouteProps,
} from 'react-router-dom';
import { HelmetData } from 'react-helmet';
import { Request, Response } from 'express';
import { Location } from 'history';
import { Document as DefaultDoc } from './Document';
import { PathMatch } from 'react-router';

export type CtxBase = {
  req?: Request;
  res?: Response;
  location?: Location;
  scrollToTop?: ScrollToTop;
  customParams?: {[key: string]: any};
}

export type Ctx<P extends string> = CtxBase & {
  match: PathMatch<P>;
}

export type AsyncComponent = {
  getInitialProps: (props: Ctx<any>) => any;
  load?: () => Promise<React.ReactNode>;
  getChunkName: () => string | undefined;
}

export type AsyncRouteComponentType<Props> = React.ComponentType<Props> &
  AsyncComponent;

/**
 * this type handles the component type in the route config object
 * {
 *   path: "/",
 *   exact: true,
 *   component: ReactComponent <- AsyncRouteableComponent
 * }
 */
export type AsyncRouteableComponent<Props = any> =
  | React.ComponentType<Props>
  // After.js Page Component (getInitialProps and ...)
  | AsyncRouteComponentType<Props>;

export type AsyncRouteComponentState = {
  Component: AsyncRouteableComponent | null;
}

export type AsyncRouteProps<Props = any> = RouteProps & {
  // in react-router v6 'exact' and 'strict' field is fixed as true
  exact?: true;
  strict?: true;
  path?: string;
  Placeholder?: React.ComponentType<any>;
  Component: AsyncRouteableComponent<Props>;
  redirectTo?: string;
}

export type ScrollToTop = React.RefObject<boolean>;

// result of getInitalProps
export type InitialData = Promise<unknown>[];

export type ServerAppState = {
  afterData: AfterClientData;
  initialData: InitialData;
}

export type InitialProps = {
  match?: AsyncRouteProps;
  data: InitialData;
}

export type AfterClientData = {
  scrollToTop: ScrollToTop;
  ssg?: boolean;
}

// result of the render()
export type RenderResult = {
  html: string;
  redirect: string;
  statusCode: number;
  data: InitialData;
}

// special result of getInitialProps
export type RedirectWithStatuCode = {
  statusCode?: number;
  redirectTo?: string;
}

// renderApp()
export type AfterRenderAppOptions<T> = {
  req: Request;
  res: Response;
  assets: Assets;
  routes: AsyncRouteProps[];
  document?: typeof DefaultDoc;
  chunks: Chunks;
  scrollToTop?: boolean;
  ssg?: boolean;
  customRenderer?: (
    element: React.ReactElement<T>
  ) => { html: string } | Promise<{ html: string }>;
  customParams: {[key: string]: any}; // will be used to pass any custom fields in loadInitialProps and Document
}

// render()
export type AfterRenderOptions<T> = Omit<AfterRenderAppOptions<T>, 'ssg'>;

// renderStatic()
export type AfterRenderStaticOptions<T> = Omit<AfterRenderAppOptions<T>, 'ssg'>;

// Result of Document
export type RenderPageResult = {
  html: string;
  helmet: HelmetData;
}

// TransitionBehavior
export type TransitionBehavior = 'blocking' | 'instant';

// Document.js
export type DocumentgetInitialProps<T = RenderPageResult> = {
  req: Request;
  res: Response;
  helmet: HelmetData;
  assets: Assets;
  data: ServerAppState;
  renderPage: () => Promise<T>;
  match: PathMatch | null;
  scripts: string[];
  styles: string[];
  scrollToTop: ScrollToTop;
  customParams: {[key: string]: any};
}

export type DocumentProps<T = RenderPageResult> = Omit<
  DocumentgetInitialProps<T>,
  'req' | 'res' | 'renderPage' | 'scrollToTop'
> &
  T;
export type AfterContext = DocumentProps;

export type AfterRouterContext = {
  url?: string;
  statusCode?: number;
  location?: Location;
};

// getAssets utility function
export type GetAssetsParams = {
  chunks: Chunks;
  route?: AsyncRouteProps<any>;
}

// ES Module type
export type Module<P> =
  | {
      default?: P;
      [x: string]: any;
    }
  | {
      exports?: P;
      [x: string]: any;
    };

// assets.json that generated by dazzle
export type Assets = {
  [name: string]: {
    [ext: string]: string;
  };
}

// chunks.json that generated by dazzle
export type Chunks = {
  [key: string]: {
    css: string[];
    js: string[];
  };
}
