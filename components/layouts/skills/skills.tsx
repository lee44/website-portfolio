import React from 'react'
import Card from '../../templates/card'
import SubTitle from '../../templates/subTitle'
import SkillIcon from '../../templates/skillIcon'

export default function Skills() {
  const skillGroups = [
    {
      name: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      name: 'Generative AI & LLMs',
      skills: [
        'Azure OpenAI Service',
        'GPT Models',
        'Generative AI',
        'LLM Integration',
        'Prompt Engineering',
        'Function Calling',
      ],
    },
    {
      name: 'RAG & Search',
      skills: [
        'Retrieval-Augmented Generation',
        'Azure AI Search',
        'Vector Search',
        'Semantic Search',
        'Hybrid Search',
        'Embeddings',
        'Document Chunking',
      ],
    },
    {
      name: 'Azure Cloud Services',
      skills: [
        'Azure App Service',
        'Azure Functions',
        'Azure Blob Storage',
        'Azure Cosmos DB',
        'Azure SQL Database',
        'Azure API Management',
        'Azure Key Vault',
      ],
    },
    {
      name: 'Backend Technologies',
      skills: ['Python FastAPI', 'RESTful APIs', 'JSON'],
    },
    {
      name: 'Frontend Technologies',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      name: 'Security',
      skills: [
        'Microsoft Entra ID',
        'OAuth 2.0',
        'Managed Identity',
        'Role-Based Access Control (RBAC)',
      ],
    },
    {
      name: 'DevOps & Deployment',
      skills: ['Azure DevOps', 'GitHub Actions', 'Git', 'Docker', 'CI/CD Pipelines'],
    },
    {
      name: 'Monitoring & Testing',
      skills: ['Azure Monitor', 'Application Insights', 'Log Analytics', 'LLM Evaluation'],
    },
  ]

  return (
    <>
      <SubTitle subtitle={'Skills'} />
      <Card classes={''} animation={'fade-up'}>
        {skillGroups.map((group) => (
          <div key={group.name} className='mb-8 last:mb-0'>
            <h3 className='mb-6 text-xl font-semibold text-center'>{group.name}</h3>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-0 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3'>
              {group.skills.map((skill) => (
                <SkillIcon key={skill} name={skill} color={''} />
              ))}
            </ul>
          </div>
        ))}
      </Card>
    </>
  )
}
