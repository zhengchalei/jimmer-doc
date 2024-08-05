"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4627],{62212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=t(74848),i=t(28453),a=t(11470),s=t(19365);const o={sidebar_position:6,title:"Interceptor before save"},l=void 0,d={id:"mutation/draft-interceptor",title:"Interceptor before save",description:"Concept",source:"@site/docs/mutation/draft-interceptor.mdx",sourceDirName:"mutation",slug:"/mutation/draft-interceptor",permalink:"/jimmer-doc/docs/mutation/draft-interceptor",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/draft-interceptor.mdx",tags:[],version:"current",lastUpdatedAt:1722888363e3,sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Interceptor before save"},sidebar:"tutorialSidebar",previous:{title:"Mutable Association Table",permalink:"/jimmer-doc/docs/mutation/associations"},next:{title:"Trigger",permalink:"/jimmer-doc/docs/mutation/trigger"}},c={},u=[{value:"Concept",id:"concept",level:2},{value:"Define Intercepted Data Format",id:"define-intercepted-data-format",level:2},{value:"Define Interceptor",id:"define-interceptor",level:2},{value:"Controlling the format of the original parameter",id:"controlling-the-format-of-the-original-parameter",level:2},{value:"Apply interceptor",id:"apply-interceptor",level:2},{value:"Using Jimmer Spring Starter",id:"using-jimmer-spring-starter",level:3},{value:"Not Using Jimmer Spring Starter",id:"not-using-jimmer-spring-starter",level:3},{value:"Final Usage",id:"final-usage",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"concept",children:"Concept"}),"\n",(0,r.jsxs)(n.p,{children:["Any entity object will be intercepted by interceptors before being ",(0,r.jsx)(n.a,{href:"./save-command",children:"saved by save commands"})," (whether inserted or updated)."]}),"\n",(0,r.jsx)(n.p,{children:"At this point, users have an opportunity to modify the data to be saved, especially to assign values to some missing properties."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["If interceptors are used to assign values to missing properties ",(0,r.jsx)(n.em,{children:"(which is also the recommended usage)"}),", it is somewhat similar to default values at the database level, but with the following differences:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Database default values can only provide business-irrelevant default value rules."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Interceptors can provide default values based on business context-related information, such as the user's identity information in the permission system."}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"Users can provide default values that are closely combined with the business based on such business context information, which cannot be achieved by database-level default values."})]}),"\n",(0,r.jsx)(n.h2,{id:"define-intercepted-data-format",children:"Define Intercepted Data Format"}),"\n",(0,r.jsxs)(n.p,{children:["Draft interceptors work with ",(0,r.jsx)(n.a,{href:"./save-command",children:"Save Command"})," to adjust data before objects are saved."]}),"\n",(0,r.jsx)(n.p,{children:"If most entity tables have the four fields created_time, modified_time, created_by and modified_by, a super class can be provided as follows:"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// highlight-next-line  \n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n\n    @Nullable\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User creator();\n\n    @Nullable\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User editor();\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val createdBy: User?\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL) \n    val modifiedBy: User?\n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"All entities that need these fields can derive from this superclass."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@OnDissociate(DissociateAction.SET_NULL)"})," here is to prevent deletion operations on associated ",(0,r.jsx)(n.code,{children:"User"})," data from being blocked due to these two foreign keys. When associated ",(0,r.jsx)(n.code,{children:"User"})," is deleted, these two foreign keys are automatically cleared."]})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Of course, user can directly intercept the entity type ",(0,r.jsx)(n.em,{children:"(decorated with @Entity)"}),", rather than an abstract type ",(0,r.jsx)(n.em,{children:"(decorated with @MappedSupperclass)"}),"."]}),(0,r.jsx)(n.p,{children:"However, if an abstract type is intercepted, the save operations of all derived entity types will be intercepted, which can greatly improve the flexibility of the system, especially when the abstract type supports multiple inheritance."}),(0,r.jsx)(n.p,{children:"Therefore, the example in this article chooses to intercept the abstract type instead of the entity type."})]}),"\n",(0,r.jsx)(n.h2,{id:"define-interceptor",children:"Define Interceptor"}),"\n",(0,r.jsxs)(n.p,{children:["Assume there is a service class called ",(0,r.jsx)(n.code,{children:"UserService"})," whose Java method ",(0,r.jsx)(n.code,{children:"getCurrentUserId()"})," or Kotlin property ",(0,r.jsx)(n.code,{children:"currentUserId"})," returns the id of the currently logged in user."]}),"\n",(0,r.jsxs)(n.p,{children:["The interceptor must implement the ",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.DraftInterceptor"})," interface."]}),"\n",(0,r.jsxs)(n.p,{children:["If using Spring management ",(0,r.jsxs)(n.em,{children:["(two ways of using ",(0,r.jsx)(n.code,{children:"DraftHandler"})," will be introduced below)"]}),", the code is:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Component\npublic class BaseEntityDraftInterceptor \nimplements DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    private final UserService userService;\n\n    public BaseEntityDraftInterceptor(UserService userService) {\n        this.userService = userService;\n    }\n\n    @Override\n    public void beforeSave(BaseEntityDraft draft, @Nullable BaseEntity original) {\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.MODIFIED_TIME)) {\n            draft.setModifiedTime(LocalDateTime.now());\n        }\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.EDITOR)) {\n            draft.applyModifiedBy(user -> {\n                user.setId(userService.getCurrentUserId());\n            });\n        }\n        if (original == null) {\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATED_TIME)) {\n                draft.setCreatedTime(LocalDateTime.now());\n            }\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATOR)) {\n                draft.applyCreatedBy(user -> {\n                    user.setId(userService.getCurrentUserId());\n                });\n            }   \n        }\n    }\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService  \n) : DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    override fun beforeSave(draft: BaseEntityDraft, original: BaseEntity?) {\n        if (!isLoaded(draft, BaseEntity::modifiedTime)) {\n            draft.modifiedTime = LocalDateTime.now()\n        }\n\n        if (!isLoaded(draft, BaseEntity::modifiedBy)) {\n            draft.modifiedBy {\n                id = userService.currentUserId\n            }\n        }\n\n        if (original === null) {\n            if (!isLoaded(draft, BaseEntity::createdTime)) {\n                draft.createdTime = LocalDateTime.now()\n            }\n\n            if (!isLoaded(draft, BaseEntity::createdBy)) {\n                draft.createdBy {\n                    id = userService.currentUserId\n                }\n            }\n        }\n    }\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"beforeSave"})," method is called before an object is saved, where the user can make final adjustments to the data to be saved."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"isNew"})," parameter is true, it means the subsequent operation is an insert; otherwise, it is an update."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Please do not modify properties decorated with ",(0,r.jsx)(n.code,{children:"@Id"})," or ",(0,r.jsx)(n.code,{children:"@Key"})," in the ",(0,r.jsx)(n.code,{children:"beforeSave"})," method."]})}),"\n",(0,r.jsx)(n.h2,{id:"controlling-the-format-of-the-original-parameter",children:"Controlling the format of the original parameter"}),"\n",(0,r.jsxs)(n.p,{children:["It was mentioned above that if the current operation is ",(0,r.jsx)(n.code,{children:"UPDATE"}),", the ",(0,r.jsx)(n.code,{children:"original"})," parameter of the ",(0,r.jsx)(n.code,{children:"beforeSave"})," method is non-null, representing the old value in the database."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"original"})," is a Jimmer dynamic object. By default, only the ",(0,r.jsx)(n.code,{children:"id"})," and ",(0,r.jsx)(n.code,{children:"key"})," properties are loaded and accessible. However, can we control the format of the ",(0,r.jsx)(n.code,{children:"orginal"})," object to allow more properties to be accessed?"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"DraftInterceptor"})," interface provides another default method ",(0,r.jsx)(n.code,{children:"dependencies()"})," which returns a collection of properties to indicate that in addition to the id property and key property, which other properties of the ",(0,r.jsx)(n.code,{children:"orginal"})," object need to be loaded."]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Component\npublic class BaseEntityDraftInterceptor \nimplements DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    @Override\n    public void beforeSave(\n        BaseEntityDraft draft, \n        // The format of `original` is controlled by `dependences()`\n        @Nullable BaseEntity original  \n    ) {\n        ...implementation is omitted...\n    }\n\n    @Override \n    // highlight-next-line\n    public Collection<TypedProp<BaseEntity, ?>> dependencies() {\n        return Arrays.asList(\n            BaseEntityProps.CREATED_BY, \n            BaseEntityProps.MODIFIED_BY  \n        );\n    }\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService    \n) : DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    override fun beforeSave(\n        draft: BaseEntityDraft,\n        // The format of `original` is controlled by `dependences()`  \n        original: BaseEntity?\n    ) {\n        ...implementation is omitted...\n    }\n\n    // highlight-next-line \n    override fun dependencies(): Collection<TypedProp<BaseEntity, *>> = listOf(\n        BaseEntityProps.CREATED_BY,  \n        BaseEntityProps.MODIFIED_BY\n    ) \n}\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["The returned property collection does not need to contain the ",(0,r.jsx)(n.code,{children:"id"})," property and ",(0,r.jsx)(n.code,{children:"key"})," property, because they are always loaded."]})]}),"\n",(0,r.jsx)(n.h2,{id:"apply-interceptor",children:"Apply interceptor"}),"\n",(0,r.jsx)(n.h3,{id:"using-jimmer-spring-starter",children:"Using Jimmer Spring Starter"}),"\n",(0,r.jsxs)(n.p,{children:["In the above, the class ",(0,r.jsx)(n.code,{children:"BaseEntityDraftInterceptor"})," is decorated with ",(0,r.jsx)(n.code,{children:"@Component"}),", obviously a Spring-managed object."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"If using Spring Boot Starter and ensuring the interceptor is Spring-managed, then Jimmer will register it automatically without additional configuration."}),(0,r.jsx)(n.p,{children:"Otherwise, it must be manually registered."})]}),"\n",(0,r.jsx)(n.h3,{id:"not-using-jimmer-spring-starter",children:"Not Using Jimmer Spring Starter"}),"\n",(0,r.jsx)(n.p,{children:"If jimmer spring starter is not used, attaching the interceptor to the SqlClient object makes it take effect:"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Bean\npublic JSqlClient sqlClient(\n    List<DraftInterceptor<?>> interceptors,\n    ...other params omitted...  \n) {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addDraftinterceptors(interceptors)\n        ...other config omitted...\n        .build();\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@Bean  \nfun sqlClient(\n    interceptors: List<DraftInterceptor<?>>,\n    ...other params omitted...\n): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        addDraftinterceptors(interceptors)\n        ...other config omitted...\n    }\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Although only one ",(0,r.jsx)(n.code,{children:"DraftInterceptor"})," is demoed in this article, there may be many in an actual project."]}),(0,r.jsxs)(n.p,{children:["So here a collection is used for Spring to inject all ",(0,r.jsx)(n.code,{children:"DraftInterceptor"})," instances."]})]}),"\n",(0,r.jsx)(n.h2,{id:"final-usage",children:"Final Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Assume ",(0,r.jsx)(n.code,{children:"Book"})," inherits from ",(0,r.jsx)(n.code,{children:"BaseEntity"}),", then it can be used like:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Book book = Objects.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("59"));\n    draft.applyStore(store -> store.setId(2L));\n});\nsqlClient.getEntities().save(book);\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "SQL in Action" \n    edition = 1\n    price = BigDecimal("59")\n    store().id = 2\n}\nsqlClient.entities.save(book)\n'})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the above save command finally results in an insert operation, the generated SQL is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    /* highlight-start */\n    CREATED_TIME,\n    MODIFIED_TIME, \n    CREATED_BY,\n    MODIFIED_BY,\n    /* highlight-end */\n    NAME,\n    EDITION,\n    PRICE,\n    STORE_ID  \n) values(\n    /* highlight-next-line */\n    ?, ?, ?, ?, \n    ?, ?, ?, ?\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where the assignment behavior for ",(0,r.jsx)(n.code,{children:"CREATED_TIME"}),", ",(0,r.jsx)(n.code,{children:"MODIFIED_TIME"}),", ",(0,r.jsx)(n.code,{children:"CREATED_BY"})," and ",(0,r.jsx)(n.code,{children:"MODIFIED_BY"})," is automatically added by the interceptor."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the above save command finally results in an update operation, the generated SQL is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"update BOOK set\n    /* highlight-start */\n    MODIFIED_TIME = ?, \n    MODIFIED_TIME,\n    /* highlight-end */ \n    PRICE = ?,\n    STORE_ID = ?\nwhere ID = ?\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where the assignment behavior for ",(0,r.jsx)(n.code,{children:"MODIFIED_TIME"})," and ",(0,r.jsx)(n.code,{children:"MODIFIED_BY"})," is automatically added by the interceptor."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(96540),i=t(18215),a=t(23104),s=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=m({queryString:t,groupId:i}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),b=(()=>{const e=d??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function I(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);