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
      <Card classes={'grid grid-cols-1 gap-4 md:grid-cols-2'} animation={'fade-up'}>
        {skillGroups.map((group) => (
          <div key={group.name} className='p-4 border rounded-lg border-primary'>
            <h3 className='mb-4 text-lg font-semibold text-center'>{group.name}</h3>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-4 md:grid-cols-3'>
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
